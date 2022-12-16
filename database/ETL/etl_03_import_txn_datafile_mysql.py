import pandas as pd
import mysql.connector as msql
from mysql.connector import Error

df = pd.read_csv('//Users//oscar//Documents//Wooly_Transactions.csv', index_col=False, delimiter=',')
dataset = df.fillna('NULL')
print(dataset.head(100))


try:
    conn = msql.connect(host='34.129.7.110', user='dcmdbuser',
                        password='dusit2022t3')#give ur username, password
    if conn.is_connected():
        cursor = conn.cursor()
        print("Database is connected")
        cursor.execute("use dcmdb")
        print("Connected to dcmdb")

        for i, row in dataset.iterrows():
            # here %S means string values
            sql = "INSERT INTO STG_TRANSACTION VALUES (%s,%s,%s,%s,%s,%s,%s)"
            cursor.execute(sql, tuple(row))
            print("Record inserted")
            # the connection is not auto committed by default, so we must commit to save our changes
            conn.commit()

        conn.close()
        print("Database connection is closed")
except Error as e:
    print("Error while connecting to MySQL", e)

