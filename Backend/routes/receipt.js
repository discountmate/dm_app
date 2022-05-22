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

//spawn the python process
const {spawn} = require('child_process');

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

//post request for the uploaded image, using the index.ejs in views for testing purposes at the moment, currently uploads locally to /backend/uploads
router.post('/', upload.single('image'), (req, res, next) => {
    try {
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
            item.processed = true; //call this after ocr script, debugging for now.
            
            //save item with receipt model
            item.save();

            console.log("Saved receipt locally successfully");

            //send back results to client
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

                //replace this line with your tesseract folder
                args: ['C:/Users/Joel/Desktop/DiscountMate/Tesseract-OCR/tesseract.exe', WriteFilePath, '1']
            }
            
            PythonShell.run('./util/t1_2022_ocr_final.py', options, function (err, results) {
                if (err) throw err;
                // results is an array consisting of messages collected during execution, uncomment to see OCR script output in console log
                //console.log('results: %j', results);
                
                //logic for MySQL server here
                /* 
                0. loop through OCR table
                1.  Update item table from OCR table, look for items with the same details in the same shop, if exists don't add item, otherwise create new item in item table. Then output item id
                2.  Insert item id into transaction table (for all items, which are not processed, then mark as processed)
                3. once loop finished, update recommendation table with highest (10) qty items
                */
                //.con.query("SELECT name, address FROM customers", function (err, result, fields) {
                console.log("Finished processing OCR script");

                var itemsTable = []
                var ocrTable = []

                //get ocr table
                db.query('SELECT * FROM ocrtable', function (err, result, fields) {
                    if (err) throw err;
                    ocrTable = [...result];
                    //console.log(result);
                });

                //get items table
                db.query('SELECT * FROM items', function (err, result, fields) {
                    if (err) throw err;
                    for(i in result)
                    {
                        console.log(result[i]);
                        itemsTable.push(result[i].name);
                    }
                });
                console.log("Finished populating tables");
                //check tables against eachother
                console.log(itemsTable.length);

                for(i in itemsTable)
                {
                    console.log(itemsTable[i]);
                }

                for(i in ocrTable)
                {
                    console.log(ocrTable[i]);
                }


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