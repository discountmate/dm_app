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

        # Insert ORDER_ITEM table FROM STG_TRANSACTION
        cursor.execute("""INSERT INTO ORDER_ITEM
                            SELECT 
                            A.TXN_INVOICE_NUM,
                            B.ITEM_ID,
                            1,
                            CONVERT(A.TXN_ITEM_PRICE, DECIMAL(8,2)),
                            0
                            FROM STG_TRANSACTION A
                            INNER JOIN STG_TRANSACTION_ITEM_ID B
                            ON A.TXN_ITEM_DESC = B.ITEM_NAME""")
        conn.commit()

        print("Inserted records into ORDER_ITEM FROM STG_TRANSACTION")
        conn.close()
        print("Database connection is closed")

except Error as e:
    print("Error while connecting to MySQL", e)

