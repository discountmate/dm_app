from PIL import Image
import pytesseract
import argparse
import cv2
import os
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import csv
import nltk
import re
from nltk.tokenize import word_tokenize
from nltk.corpus import wordnet
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'





#lets read an image
image=cv2.imread('3.jpg',0)



#convert it into text
text=(pytesseract.image_to_string(image)).lower()
print(text)



#identify the date

match=re.findall(r'\d+[/.-]\d+[/.-]\d+', text)

st=" "
st=st.join(match)
print(st)


nltk.download('punkt',quiet=True)
nltk.download('wordnet',quiet=True)


#lets try to extract title
sent_tokens=nltk.sent_tokenize(text)
#print(sent_tokens)
sent_tokens[0].splitlines()[0]

#lets find the price of the category.
price=re.findall(r'[\$\£\€](\d+(?:\.\d{1,2})?)',text)
price = list(map(float,price)) 
print(max(price))
x=max(price)  

#till here we have extracted date,title and amount.
#now its time to categorise bill whether it is shopping or grocery like wise
#so i will first tokenise the text and search for key words
print(word_tokenize(text))



#we will remove punctuation
tokenizer = nltk.RegexpTokenizer(r"\w+")
new_words = tokenizer.tokenize(text)
print(new_words)



#stop_words = set(nltk.corpus.stopwords.words('english')) 
nltk.download('stopwords')



#there are stop words like a ,an,the etc which are not required
#so we need to filter them
stop_words = set(nltk.corpus.stopwords.words('english'))


#there is the filetred list
filtered_list=[w for w in new_words if w not in stop_words ]
print(filtered_list)


# categorizing the receipts 
#entertainment
entertainment = [] 
for syn in wordnet.synsets("entertainment"): 
    for l in syn.lemmas(): 
        entertainment.append(l.name()) 
        
l=['happy','restaurant','food','kitchen','hotel','room','park','movie','cinema','popcorn','combo meal']
entertainment=entertainment+l



#home utility
home_utility=[] 
for syn in wordnet.synsets("home"): 
    for l in syn.lemmas(): 
         home_utility.append(l.name()) 
l2=['internet','telephone','elecricity','meter','wifi','broadband','consumer','reading','gas','water','postpaid','prepaid']
home_utility+=l2



#grocery
 
grocery=[] 
for syn in wordnet.synsets("grocery"): 
    for l in syn.lemmas(): 
         grocery.append(l.name())
l3=['bigbasket','milk','atta','sugar','suflower','oil','bread','vegetabe','fruit','salt','paneer']
grocery+=l3



#investment
investment=[] 
for syn in wordnet.synsets("investment"): 
    for l in syn.lemmas(): 
         investment.append(l.name()) 
l1=['endowment','grant','loan','applicant','income','expenditure','profit','interest','expense','finance','property','money','fixed','deposit','kissan','vikas']
investment=investment+l1



#travel and transportation
transport=[]
for syn in wordnet.synsets("car"): 
    for l in syn.lemmas(): 
         transport.append(l.name()) 
l4=['cab','ola','uber','autorickshaw','railway','air','emirates','aerofloat','taxi','booking','road','highway']
transport+=l4




#shopping
shopping=[]
for syn in wordnet.synsets("dress"): 
    for l in syn.lemmas(): 
         shopping.append(l.name()) 
l4=['iphone','laptop','saree','max','pantaloons','westside','vedic','makeup','lipstick','cosmetics','mac','facewash','heels','crocs','footwear','purse']
shopping+=l4


#here we will check that the bill belongs to which category
#we will make that category true.
for word in filtered_list:
    if word in entertainment:
        e=True
        break
    elif word in investment:
        inv=True
        break
    elif word in grocery:
        g=True
        break
    elif word in shopping:
        s=True
        break
    elif word in transport:
        t=True
        break
    elif word in home_utility:
        h=True
        break


#this is how i created all the csv files.
'''with open('entertainment1.csv', 'a', newline='') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=',',quoting=csv.QUOTE_MINIMAL)
    spamwriter.writerow(['date','organisation','amount'])'''



#this code the category in which the bill belongs to
#if e is true then entertainment categrory and we will ,ake filename as entertainment.csv using
#formatting
if(e):
    print("entertainment category")
    filename='{}.csv'.format('entertainment')
    #df=pd.read_csv('entertainment.csv')
elif(inv):
    print("investment category")
    filename='{}.csv'.format('investment')
    #df=pd.read_csv('investment.csv')
elif(s):
    print("shopping category")
    filename='{}.csv'.format('shopping')
    #df=pd.read_csv('shopping.csv')
elif(g):
    print("grocery category")
    filename='{}.csv'.format('grocery')
    #df=pd.read_csv('grocery.csv')
elif(t):
    print("transport category")
    filename='{}.csv'.format('transport')
    #df=pd.read_csv('transport.csv')
elif(h):
    print("home utility category")
    filename='{}.csv'.format('home')
    #df=pd.read_csv('home.csv')
else:
    print("others")
    filename='{}.csv'.format('others')
    #df=pd.read_csv('others.csv')



#add the contents in their respective csv file
row_contents = [st,head,x]
from csv import writer
 
def append_list_as_row(file, list_of_elem):
   
    with open(file, 'a+', newline='') as write_obj:
       
        csv_writer = writer(write_obj)
        
        csv_writer.writerow(list_of_elem)
append_list_as_row(filename, row_contents)


#after this make sure you save it
entertainment=pd.read_csv('entertainment.csv')
investment=pd.read_csv('investment.csv')
shopping=pd.read_csv('shopping.csv')
grocery=pd.read_csv('grocery.csv')
transport=pd.read_csv('transport.csv')
other=pd.read_csv('others.csv')
home=pd.read_csv('home.csv')


entertainment['Date']= pd.to_datetime(entertainment.Date)
investment['Date']=pd.to_datetime(investment.Date)
shopping['Date']=pd.to_datetime(shopping.Date)
grocery['Date']=pd.to_datetime(grocery.Date)
transport['Date']=pd.to_datetime(transport.Date)
other['Date']=pd.to_datetime(other.Date)
home['Date']=pd.to_datetime(home.Date)