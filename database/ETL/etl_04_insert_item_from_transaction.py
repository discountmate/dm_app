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

        # Insert record into ITEM table where item found in STG_TRANSACTION but not in ITEM table
        cursor.execute("""INSERT INTO ITEM
                            select 
                            ITEM_ID,
                            1,
                            ITEM_NAME,
                            NULL,
                            NULL,
                            10000
                            from STG_TRANSACTION_ITEM_ID where ITEM_ID IN (select ITEM_ID from ORDER_ITEM 
                            where ITEM_ID not in (select item_id from ITEM))""")
        conn.commit()

        print("Inserted records into ITEM table FROM STG_TRANSACTION")
        conn.close()
        print("Database connection is closed")

except Error as e:
    print("Error while connecting to MySQL", e)

