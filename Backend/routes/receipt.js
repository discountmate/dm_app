//use express
const express = require('express');
const { models } = require('mongoose');
const router = express.Router();
var multer = require('multer');
const upload = multer({dest: './uploads/'}) 
var receiptModel = require('../models/receipt');
var fs = require('fs');
const path = require('path');

//spawn the python process
const {spawn} = require('child_process');

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
        res.status(500).send("Error creating obj");
    }

    //Test save image as png

    // strip off the data: url prefix to get just the base64-encoded bytes
    var Currentdata = obj.img.data.toString("base64");
    //console.log("DATA", Currentdata)
    var buf = Buffer.from(Currentdata, 'base64');
    //file path for temp upload to be processed by the OCR script
    var WriteFilePath = './uploads/ImageToBeProcessed.png'
    fs.writeFile(WriteFilePath, buf, function(err) {
        if (err) throw err;
    });
    //End Test save image as png

    //create the object with the model
    receiptModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erorr occurred:", err.toString());
        }
        else {
            //name of image = item
			console.log("Saved receipt successfully");

            item.processed = true; //call this after ocr script, debugging for now.

            item.save();

            //call ocr script here to use the images saved locally preferably
            var PathSaved = req.file.filename;
            console.log("File name: " + PathSaved);

            const {PythonShell} = require('python-shell');
            let options = {
                mode: 'text',
                pythonOptions: ['-u'], // get print results in real-time
                //replace this line with your tesseract folder
                args: ['C:/Users/Joel/Desktop/DiscountMate/Tesseract-OCR/tesseract.exe', WriteFilePath]
            }
            
            PythonShell.run('./util/OCRScript.py', options, function (err, results) {
                if (err) throw err;
                // results is an array consisting of messages collected during execution
                console.log('results: %j', results);

                try {
                    //unlink image once it's been processed
                    fs.unlinkSync(WriteFilePath)
                  } catch(err) {
                    console.error(err)
                  }
                //send back results to client
                res.send(results);
                
            });
            //image has been processed by the OCR script
            //res.redirect('/receipt');
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