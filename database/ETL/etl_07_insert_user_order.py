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

        # Insert USER_ORDER FROM STG_TRANSACTION
        cursor.execute("""CREATE TEMPORARY TABLE TEMP_TRANSACTION
                            SELECT 
                                A.TXN_INVOICE_NUM, 
                                STR_TO_DATE(A.TXN_DATE, "%D/%M/%Y") AS TXN_DATE,
                                B.STORE_ID, 
                                SUM(CONVERT(A.TXN_ITEM_PRICE,DECIMAL(10,2))) AS ORDER_TOTAL_PRICE
                            FROM STG_TRANSACTION A
                            LEFT JOIN (SELECT STORE_ID, CONVERT(STORE_POSTCODE,CHAR) AS STORE_POSTCODE FROM STORE) B
                            ON LEFT(A.TXN_SUBURB, 4) = B.STORE_POSTCODE
                            GROUP BY 
                                A.TXN_INVOICE_NUM, 
                                STR_TO_DATE(A.TXN_DATE, "%D/%M/%Y"),
                                B.STORE_ID""")
        conn.commit()

        cursor.execute("""INSERT INTO USER_ORDER 
                            SELECT 
                                TXN_INVOICE_NUM,
                                1001,
                                STORE_ID,
                                ORDER_TOTAL_PRICE,
                                NULL,
                                TXN_DATE
                            FROM TEMP_TRANSACTION""")
        conn.commit()

        print("Inserted records into USER_ORDER FROM STG_TRANSACTION")
        conn.close()
        print("Database connection is closed")

except Error as e:
    print("Error while connecting to MySQL", e)

