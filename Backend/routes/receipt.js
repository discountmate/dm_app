//use express
const express = require('express');
const { models } = require('mongoose');
const router = express.Router();
var multer = require('multer');
const upload = multer({dest: './uploads/'}) 
var receiptModel = require('../models/receipt');
var fs = require('fs');
const path = require('path');
const mysql = require('mysql2'); //used for mysql calls
const config = require('../config/config.json'); //used to get db details
require("dotenv").config(); //used to access the .env file easily

//spawn the python process
const {spawn} = require('child_process');
var userID;

//create mysql pool to connect to MySQL db
const db = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

//get request for the receipt upload, shows the index.ejs debug page for now.
router.get('/', (req, res) => {
    //use mongoose to define shema
    receiptModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('index', { items: items });
        }
    });
});

function objToString (obj) {
    let str = '';
    for (const [p, val] of Object.entries(obj)) {
        str += `${val}`;
    }
    return str;
}

async function FillSqLServer()
{
    //date logic
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    //logic for MySQL server here
    /* 
    0. loop through OCR table
    1.  Update item table from OCR table, look for items with the same details in the same shop, if exists don't add item, otherwise create new item in item table. Then output item id
    2.  Insert item id into transaction table (for all items, which are not processed, then mark as processed)
    3. once loop finished, update recommendation table with highest (5) qty items
    */
    //.con.query("SELECT name, address FROM customers", function (err, result, fields) {

    //gives raw objects as results, convert to string using the obj to string function.

    //OCR TABLE
    RawOCRTableNames = await db.promise().query("SELECT food FROM ocrtable WHERE Processed = 0");
    RawOCRStoreNames = await db.promise().query("SELECT Store FROM ocrtable WHERE Processed = 0");
    RawOCRStoreBrand = await db.promise().query("SELECT Supermarket FROM ocrtable WHERE Processed = 0");
    RawOCRStorePrice = await db.promise().query("SELECT Cost FROM ocrtable WHERE Processed = 0");
    RawOCRTable = await db.promise().query("SELECT * FROM ocrtable WHERE Processed = 0");
    RawOCRTableID = await db.promise().query("SELECT id FROM ocrtable WHERE Processed = 0");
    RawOCRTableDate = await db.promise().query("SELECT date FROM ocrtable WHERE Processed = 0");

    OCRTableNames = []
    OCRTableStores = []
    OCRTableCost = []
    OCRTableID = []
    OCRTableDate = []
    OCRTableBrand = []

    //ITEM TABLE
    RawItemTableNames = await db.promise().query("SELECT name FROM items");
    RawItemTableID = await db.promise().query("SELECT id FROM items");
    RawItemTablePrice = await db.promise().query("SELECT price FROM items");

    ItemTableNames = []
    ItemTableID = []
    ItemTablePrice = []

    //fix names
    for(i in RawItemTablePrice[0])
    {
        ItemTablePrice.push(objToString(RawItemTablePrice[0][i]));
    }

    //fix names
    for(i in RawOCRStoreBrand[0])
    {
        OCRTableBrand.push(objToString(RawOCRStoreBrand[0][i]));
    }

    //fix names
    for(i in RawItemTableID[0])
    {
        ItemTableID.push(objToString(RawItemTableID[0][i]));
    }

    //fix dates
    for(i in RawOCRTableDate[0])
    {
        //console.log(RawOCRTableDate[0][i]);
        var s = JSON.stringify(RawOCRTableDate[0][i]); //stringify the raw output
        Fix = JSON.parse(s).date; //get the date part
        Fix2 = Fix.split('T'); //spit it at the T - start of the time
        //console.log(Fix2);
        OCRTableDate.push(Fix2[0]); //add the first split to the Fixed date list
    }
    
    //fix names
    for(i in RawOCRTableID[0])
    {
        OCRTableID.push(objToString(RawOCRTableID[0][i]));
    }

    //fix names
    for(i in RawOCRTableNames[0])
    {
        OCRTableNames.push(objToString(RawOCRTableNames[0][i]));
    }

    //fix names
    for(i in RawOCRStoreNames[0])
    {
        OCRTableStores.push(objToString(RawOCRStoreNames[0][i]));
    }

    //fix names
    for(i in RawOCRStorePrice[0])
    {
        OCRTableCost.push(objToString(RawOCRStorePrice[0][i]));
    }

    //fix names
    for(i in RawItemTableNames[0])
    {
        ItemTableNames.push(objToString(RawItemTableNames[0][i]));
    }

    //set processed to true for all ocr item entries
    for(i in OCRTableID)
    {
        await db.promise().query("UPDATE ocrtable SET Processed = ? WHERE id = ?", [1, OCRTableID[i]]);
    }
    console.log("Updated OCR processed booleans...")

    //for each item in stores, insert a new store, this will error for most as stores are unique, sets postcode to 3000 for now.
    for(i in OCRTableStores)
    {
        try
        {
            await db.promise().query("INSERT INTO shops (name, address, postcode) VALUES (?, ?, ?)", [OCRTableBrand[i], OCRTableStores[i], 3000]);
        }
        catch
        {
            console.log("Tried to insert duplicate store...");
        }
        
    }

    //check all items for a price change
    for(i in ItemTableNames)
    {
        //if item already exists...
        if(await db.promise().query("SELECT EXISTS(SELECT 1 FROM items WHERE name = ?)", [OCRTableNames[i]]))
        {
            //now check if the price is the same...
            if(await db.promise().query("SELECT EXISTS(SELECT 1 FROM items WHERE price = ?)", [OCRTableCost[i]]))
            {
                console.log(OCRTableNames[i], "Already exists at:", OCRTableCost[i]);
            }
            else //if a different price is detected then set discount price at that new price!
            {
                console.log(OCRTableNames[i], "has a new price at:", OCRTableCost[i]);
                await db.promise().query("UPDATE items SET discountprice = ? WHERE name = ?)", [OCRTableCost[i], OCRTableNames[i]])
            }
        }
    }

    //for each item in ocrtable that IS NOT in items table, insert.
    let difference = OCRTableNames.filter(x => !ItemTableNames.includes(x));
    for(i in difference)
    {
        await db.promise().query("INSERT INTO items (shopid, Store, name, price, sale) VALUES (?, ?, ?, ?, ?)", [1, OCRTableBrand[i], difference[i], OCRTableCost[i], 0]);
    }

    console.log("Added new items into the items table...")

    //get ITEM ID's ascociated with the OCR Table
    GET_IDS = []; //first fix
    GET_FIX_ID = []; //second fix
    GET_PROPER_ID = []; //complete fix

    for(i in OCRTableNames)
    {
        GET_IDS.push(await db.promise().query("SELECT id FROM items WHERE name = ?", [OCRTableNames[i]]));
    }

    //second fix
    for(i in GET_IDS)
    {
        GET_FIX_ID.push(GET_IDS[i][0]);
    }

    //complete fix with string
    for(i in GET_FIX_ID)
    {
        var s = JSON.stringify(GET_FIX_ID[i]);
        GetID = JSON.parse(s)[0].id;
        GET_PROPER_ID.push(GetID)
    }


    qtyList = []

    for(i in OCRTableID)
    {
        try
        {
            qty = Math.floor(Math.random() * (5 - 1 + 1) + 1); //use the OCR python script to calculate quantity in the future, for now using a random value between 1 and 5
            qtyList.push(qty);
            await db.promise().query("INSERT INTO transactions (userid, itemid, price, qty, discount, transactiondate, lastupdate) VALUES (?, ?, ?, ?, ?, ?, ?)", [userID, GET_PROPER_ID[i], OCRTableCost[i], qty, 0, OCRTableDate[i], (year + "/" + month + "/" + date)]);
        }
        catch
        {
            console.log("User not logged in!");
        }
        
    }

    console.log("Transaction Table Populated");

    //recommended items
    RecoList = [] 
    OrigList = [...qtyList]; //original list before altering to find max
    recoItems = []
    //add the top 5 qty items to the recommended table
    for(i = 0; i < 5; i++)
    {
        max = Math.max(...qtyList);
        
        RecoList.push(max);
        var index = qtyList.indexOf(max);
        if (index !== -1) {
            qtyList.splice(index, 1); //remove index with the highest qty
            //console.log("Index position of max:", index); //debug position of highest qty
            recoItems.push(GET_PROPER_ID[index]); //find item it correlates to
        }
    }
    console.log("Calculated highest quantity items...")

    //console.log(recoItems);
    //populate recommend table with (5) items with highest quantity
    for(i in recoItems)
    {
        try
        {
            await db.promise().query("REPLACE INTO recommendation (itemid, userid, RecType, Status, LastUpdate) VALUES (?, ?, ?, ?, ?)", [recoItems[i], userID, 'HistoryBased', 1, (year + "/" + month + "/" + date)]);
        } catch (err)
        {
            console.log("Recommendation was duplicate, ignoring...")
        }
        
    }
    console.log("Inserted recommended items to table");
    console.log("Finished SQL Logic");
}

async function GetUserID()
{
    try
    {
        var userIDRaw = await db.promise().query("SELECT id FROM users WHERE username = ?", [process.env.user]);
        //console.log(RawOCRTableDate[0][i]);
        var s = JSON.stringify(userIDRaw[0][0]); //stringify the raw output
        GetID = JSON.parse(s).id;
        console.log("User ID:", GetID);
        userID = GetID;
    }
    catch
    {
        console.log("User not logged in! using debug user for inserts");
        userID = 1;
    }

}

//post request for the uploaded image, using the index.ejs in views for testing purposes at the moment, currently uploads locally to /backend/uploads this also handles MySQL insertion code
router.post('/', upload.single('image'), (req, res, next) => {
    try {
    GetUserID();
    //object to upload, includes a name and description
    let date_object = new Date();
    // get current time
    let date = ("0" + date_object.getDate()).slice(-2);
    let month = ("0" + (date_object.getMonth() + 1)).slice(-2);
    let year = date_object.getFullYear();
    let hours = date_object.getHours();
    let minutes = date_object.getMinutes();
    let seconds = date_object.getSeconds();
    
    try{
        var obj = {
            id: year + "-" + month + "-" + date + "/" + hours + ":" + minutes + ":" + seconds,
            processed: false,
            img: {
                //image location
                data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
    } catch {
        console.log("Error creating obj in receipt.js");
        res.send("Error creating the image object")
    }

    //Temp image to be processed by the OCR script
    var Currentdata = obj.img.data.toString("base64");
    //console.log("DATA", Currentdata)
    var buf = Buffer.from(Currentdata, 'base64');
    //file path for temp upload to be processed by the OCR script
    var WriteFilePath = './uploads/ImageToBeProcessed.png'
    fs.writeFile(WriteFilePath, buf, function(err) {
        if (err) throw err;
    });

    //create the object with the model
    receiptModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error occurred creating the receipt model:", err.toString());
        }
        else {
            console.log("Saved receipt locally successfully");

            //send back results to client so they don't have to wait for the MySQL logic to finish to keep using the application
            res.status(200).send("Receipt saved.. OCR running in background");

            //call ocr script here to use the images saved locally preferably

            var PathSaved = req.file.filename;
            
            //debug line to see what the temp image was saved as.
            //console.log("File name: " + PathSaved);

            //use pythonshell library to run python with system args
            const {PythonShell} = require('python-shell');

            let options = {
                mode: 'text',
                pythonOptions: ['-u'], // get py console output in real time
                pythonPath: 'python',

                //replace this line with your tesseract folder
                args: ['C:/Program Files/Tesseract-OCR/tesseract.exe', WriteFilePath, userID]
            }
            
            PythonShell.run('./util/t1_2022_ocr_final.py', options, function (err, results) {
                if (err) {
                    console.log("Error: " + err);
                    res.status(500).send("Error processing OCR script");
                } 
                // results is an array consisting of messages collected during execution, uncomment to see OCR script output in console log
                //console.log('results: %j', results);
                
                item.processed = true; //call this after ocr script, debugging for now.
                item.save();

                //call sql server logic function
                FillSqLServer();
                try {
                    //unlink image once it's been processed
                    fs.unlinkSync(WriteFilePath)
                  } catch(err) {
                    console.error(err)
                    res.status(500).send("Error removing temp image");
                  }
            });
            //image has been processed by the OCR script
        }
   });
} catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
});

//export router
module.exports = router;