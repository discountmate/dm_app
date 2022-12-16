import mysql.connector as msql
from mysql.connector import Error

try:
    conn = msql.connect(host='34.129.7.110', user='dcmdbuser',
                        password='dusit2022t3')#give ur username, password
    if conn.is_connected():
        cursor = conn.cursor()
        print("Database is connected")
        cursor.execute("use dcmdb")
        print("Connected to dcmdb")

        # Weekly Insert ITEM_PRICE_HIST from ITEM_PRICE_CURRENT
        cursor.execute("""INSERT INTO ITEM_PRICE_HIST
                            SELECT  
                            ITEM_ID,
                            COM_ID,
                            (SELECT DATE_ADD(MAX(IPH_DATE), INTERVAL 7 DAY) FROM ITEM_PRICE_HIST),
                            IP_ITEM_BASE_PRICE,
                            NULL,
                            NULL
                            FROM ITEM_PRICE_CURRENT""")
        conn.commit()

        cursor.execute("UPDATE ITEM_PRICE_HIST SET IPH_ITEM_DISCOUNT_PRICE = NULL")
        conn.commit()

        cursor.execute("UPDATE ITEM_PRICE_HIST SET IPH_ITEM_DISCOUNT_PCT = NULL")
        conn.commit()

        cursor.execute("""UPDATE ITEM_PRICE_HIST A
                            INNER JOIN VW_CALC_ITEM_PRICE_MIN_MAX B ON A.ITEM_ID = B.ITEM_ID
                            SET A.IPH_ITEM_DISCOUNT_PRICE = B.MAX_PRICE -  A.IPH_ITEM_BASE_PRICE""")
        conn.commit()

        cursor.execute("""UPDATE ITEM_PRICE_HIST SET IPH_ITEM_DISCOUNT_PCT 
                            = ROUND(IPH_ITEM_DISCOUNT_PRICE / (IPH_ITEM_BASE_PRICE + IPH_ITEM_DISCOUNT_PRICE), 2)""")
        conn.commit()

        print("Inserted latest weekly price data into ITEM_PRICE_HIST")
        conn.close()
        print("Database connection is closed")

except Error as e:
    print("Error while connecting to MySQL", e)

