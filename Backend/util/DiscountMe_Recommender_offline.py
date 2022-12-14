import mysql.connector
from mysql.connector import errorcode
import pandas as pd 
from datetime import date
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity

#DB config
config = {
  'user': 'dcmdbuser',
  'password': 'dusit2022t3',
  'host': '34.129.7.110',
  'database': 'dcmdb',
  'raise_on_warnings': True
}

#offline
def date_group_handler(list):
    if len(list) == 0:
      return 0

    max_date = pd.Timestamp(max(list))
    today = pd.Timestamp(date.today())
    # print(type(max_date))
    # print(type(today))
    return (today - max_date).days 
    
def get_user_transactions_offline(file, cols):
    df = pd.read_csv(file, parse_dates=['Date'])
    df = df[cols]
    df_grouped = df.groupby(['Item Description']).agg({'Item Price': ['mean','count'],'Date': ['min', date_group_handler]}).reset_index()
    df_grouped.columns = ['Item', 'Price', 'Count', 'Date', 'Days']
    #df_grouped = df_grouped[['Price', 'Count', 'Days']]
    scaler = StandardScaler()
    df_scaled = pd.DataFrame(scaler.fit_transform(df_grouped[['Price', 'Count', 'Days']]), index = df_grouped.index, columns=['Price', 'Count', 'Days']) 
    item_sim = cosine_similarity(df_scaled)  
    df_item_sim = pd.DataFrame(item_sim, index = df_scaled.index)#, columns=df_scaled.rows)
    return [df_grouped, df_item_sim]

def get_similar_items_scores(df_item_sim, items, count):
  similiar_score = df_item_sim [items]
  similiar_score = similiar_score.mean(axis = 1).sort_values(ascending = False)[:count]
  return similiar_score

def get_user_recommendations(items_sim_scores, items, user_items): 
  item_indices = get_similar_items_scores(items_sim_scores, user_items, 10).index
  rec_items = items.iloc[item_indices].reset_index()[['Item', 'Price']]
  return rec_items

def init_build_recommender_offline(file): 
  if file is None:
    file = "Wooly_Transactions.csv"
  cols = ['Item Description', 'Item Price', 'Date']
  [items, items_sim_scores] = get_user_transactions_offline(file, cols)
  #test user 1
  print("\nTest#1")
  user_items = [0,1,2]
  rec_items = get_user_recommendations(items_sim_scores, items, user_items)
  print(rec_items) 

  #test user 2
  print("\nTest#2")
  user_items = [0,1,2, 100, 10, 12]
  rec_items = get_user_recommendations(items_sim_scores, items, user_items)
  print(rec_items)  

init_build_recommender_offline(None)
