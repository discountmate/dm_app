import mysql.connector
from mysql.connector import errorcode
import pandas as pd 
from datetime import date
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
import time


#DB config
config = {
  'user': 'dcmdbuser',
  'password': 'dusit2022t3',
  'host': '34.129.7.110',
  'database': 'dcmdb',
  'raise_on_warnings': True
}
def date_group_handler(d): 
    """Find a dfference in days between a date and today.
    Args:
        d: a transaction date.
    Returns:
        the number of days. 
    """
    date = pd.Timestamp(d)
    today = pd.Timestamp(date.today())
    return (today - date).days 

def get_all_transactions_db(cnx):
    """Return all transactions from a db. 

    Args:
        cnx: database connection.
    Returns:
        df: a dataframe contains all transaction and for each: 
        ITEM_ID: Item ID 
        user_id: User ID 
        t_date: Transaction date:
        comp_id: Company ID
        t_count: transaction count 
        avg_price: average item price 
        CP: Current item price 
        DP: Discounted item price 
        days: differnce between transaction date and today in number of days.
        DPCT: Discount percentage    
    """
    query = "SELECT uo.USER_ID user_id,  o.ITEM_ID, c.COM_ID comp_id, t.TXN_DATE t_date, i.ITEM_NAME, count(t.TXN_DATE) t_count," 
    query += " avg(ORDER_ITEM_BASE_PRICE) avg_price, sum(ORDER_ITEM_QTY) sum_qnt, avg(cp.IP_ITEM_BASE_PRICE) CP,"
    query += " avg(cp.IP_ITEM_DISCOUNT_PRICE) DP, MAX(cp.IP_FOUR_WK_HIGHEST_PRICE) MAXP, MIN(cp.IP_FOUR_WK_LOWEST_PRICE) MINP" 
    query += " FROM dcmdb.ORDER_ITEM o inner join USER_ORDER uo on uo.ORDER_ID = o.ORDER_ID"
    query += " inner join ITEM i on o.ITEM_ID = i.ITEM_ID inner join STG_TRANSACTION t on t.TXN_INVOICE_NUM = o.ORDER_ID"
    query += " inner join ITEM_PRICE_CURRENT cp on cp.ITEM_ID = i.ITEM_ID inner join STORE s on s.STORE_ID = uo.STORE_ID"
    query += " inner join COMPANY c on c.COM_ID = s.COM_ID"
    query += " group by uo.USER_ID, c.COM_ID, o.ITEM_ID, i.ITEM_NAME, t_date order by count(o.ITEM_ID) desc"

    df = pd.read_sql(sql=query,con=cnx, parse_dates=["t_date"]) 
    df =df[['ITEM_ID','user_id','t_date', 'comp_id', 't_count', 'avg_price', 'CP', 'DP']]
    df['DP'] = df['DP'].fillna(0)
    df['DPCT'] = 0
    has_discount = df ['DP'] <= 0   
    df.loc[has_discount,'DP'] = 0 
    df['DPCT'] =  pd.to_numeric(df['DP'] / df['CP'])   
    df['days'] = df['t_date'].apply(date_group_handler)      
    return df 

def reset_recomndation_table(): 
    """Delete current recommendations.   
    Args: None
    Returns: None
    """ 
    # connect to DB
    cnx = mysql.connector.connect(**config)
    # preparing a cursor object
    cursorObject = cnx.cursor()    
    # deleting data from the RECOMMEND_ITEM table
    query = "DELETE FROM RECOMMEND_ITEM"
    cursorObject.execute(query)
    
    # data deleted
    cnx.commit()
    cnx.close()

def insert_user_recommendations_db(attrRows):
    """Update recomndation table.  
    Args:
        df: dataframe contains recpmndation records  
    Returns: None      
    """
     # connect to DB
    cnx = mysql.connector.connect(**config)
    # preparing a cursor object
    cursorObject = cnx.cursor(prepared=True)    
    # inserting data into the RECOMMEND_ITEM table
    query = """INSERT INTO RECOMMEND_ITEM  
              VALUES (%s, %s, %s)"""
    for attrValues in attrRows:
        try:
            cursorObject.execute(query, attrValues)
        except:
            pass

    # data inserted
    cnx.commit()
    cnx.close()

def callculate_user_recommendations_online(count):
    """Find user item recommendations and update the db. 
    Args:
        count: max number of recommnded items 
    Returns: None      
    """
    try:
      # connect to DB and get all transactions 
      cnx = mysql.connector.connect(**config)
      df = get_all_transactions_db(cnx)
      cnx.close()

      # scale the data 
      scaler = StandardScaler()      
      df_scaled = pd.DataFrame(scaler.fit_transform(df[['DPCT', 't_count', 'days']]), index = df.index, columns=['DPCT', 't_count', 'days']) 
      # Paramters to consider to match items are: 
      # days: differnce between transaction date and today in number of days.
      # DPCT: Discount percentage   
      # t_count: transaction count  
      # Step 1: compute similarity and create a dataframe 
      item_sim = cosine_similarity(df_scaled)  
      df_item_sim = pd.DataFrame(item_sim, index = df['ITEM_ID'], columns=df['ITEM_ID'])  

      # Step 2: find recommndations for users 
      # get all users 
      users = df['user_id'].unique()
      # get transactions per user 
      df_grouped = df.groupby(['user_id', 'ITEM_ID', 'comp_id']).max()
      df_grouped.reset_index(inplace = True)

      #delete current recomndations  
      reset_recomndation_table()
      #wait for 5 seconds
      time.sleep(5) # Sleep for 3 seconds

      for user in users:
        # get items within past month. 
        user_items = df_grouped[(df_grouped['user_id'] == user) & (df_grouped['days'] > 30) ].sort_values(['t_date'], ascending= False)['ITEM_ID'].unique()

        similiarity_scores = df_item_sim [user_items].mean(axis = 1).sort_values(ascending = False)
        count = min(len(similiarity_scores), count)
        similiarity_scores_top_10 = similiarity_scores[:count]
        attrRows = []
        for u_item in similiarity_scores_top_10.index:
            comp_id = df[df['ITEM_ID'] == u_item]['comp_id'].unique()[0]
            attrRows.append((str(user),str(u_item),str(comp_id))) 
       
        # add user recommedned items 
        insert_user_recommendations_db(attrRows)
        time.sleep(1) # Sleep for 3 seconds
    except mysql.connector.Error as err:
      if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with your user name or password")
      elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
      else:
        print(err)  
  

callculate_user_recommendations_online(10) 