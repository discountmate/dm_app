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

        # WEEKLY INSERT AND UPDATE ITEM_PRICE_CURRENT from Wooly datafile
        cursor.execute("TRUNCATE TABLE ITEM_PRICE_CURRENT")
        conn.commit()
        cursor.execute("""INSERT INTO ITEM_PRICE_CURRENT
                            SELECT 
                            WOOLY_ITEM_CODE,
                            1,
                            WOOLY_ITEM_PRICE,
                            NULL,
                            NULL,
                            NULL,
                            NULL
                            FROM STAGING_WOOLY_ITEM_PRICE""")
        conn.commit()
        print("Delete insert latest weekly Woolworths data into ITEM_PRICE_CURRENT")

        # WEEKLY INSERT AND UPDATE ITEM_PRICE_CURRENT from Coles datafile
        cursor.execute("""INSERT INTO ODS_COLES_ITEM_PRICE
                            SELECT 
                            COLES_PRICE_DATE,
                            REPLACE(COLES_ITEM_NAME, '|', ''),
                            MAX(SUBSTR(REPLACE(COLES_ITEM_PRICE, ',', ''), 2, 10)),
                            MAX(COLES_ITEM_UNIT_PRICE)
                            FROM STAGING_COLES_ITEM_PRICE
                            WHERE COLES_ITEM_NAME <> 'NULL'
                            AND COLES_ITEM_PRICE <> 'NULL'
                            GROUP BY 
                            COLES_PRICE_DATE,
                            REPLACE(COLES_ITEM_NAME, '|', '')""")
        conn.commit()
        cursor.execute("""INSERT INTO ITEM_PRICE_CURRENT
                            SELECT 
                            Distinct 
                            B.ITEM_ID,
                            2,
                            A.COLES_ITEM_PRICE,
                            0,
                            0,
                            A.COLES_ITEM_PRICE,
                            A.COLES_ITEM_PRICE
                            FROM ODS_COLES_ITEM_PRICE A
                            INNER JOIN ITEM B
                            ON A.COLES_ITEM_NAME = B.ITEM_NAME""")
        conn.commit()
        print("Delete insert latest weekly Coles data into ITEM_PRICE_CURRENT")

        # Update 4 weeks highest and lowest price
        cursor.execute("""UPDATE ITEM_PRICE_CURRENT A
                            INNER JOIN VW_CALC_ITEM_PRICE_MIN_MAX B ON A.ITEM_ID = B.ITEM_ID
                            SET 
                                A.IP_FOUR_WK_HIGHEST_PRICE = B.MAX_PRICE,
                                A.IP_FOUR_WK_LOWEST_PRICE = B.MIN_PRICE""")
        conn.commit()

        # Update discount price
        cursor.execute("""UPDATE ITEM_PRICE_CURRENT 
                            SET IP_ITEM_DISCOUNT_PRICE = IP_FOUR_WK_HIGHEST_PRICE -  IP_ITEM_BASE_PRICE""")
        conn.commit()

        # Update discount price percentage
        cursor.execute("""UPDATE ITEM_PRICE_CURRENT 
                            SET IP_ITEM_DISCOUNT_PCT = ROUND(IP_ITEM_DISCOUNT_PRICE / 
                            (IP_ITEM_BASE_PRICE + IP_ITEM_DISCOUNT_PRICE), 2)""")
        conn.commit()

        conn.close()
        print("Database connection is closed")

except Error as e:
    print("Error while connecting to MySQL", e)

