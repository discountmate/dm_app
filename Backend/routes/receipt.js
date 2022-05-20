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
    //object to upload, includes a name and description
    let date_object = new Date();
    // get current time
    let date = ("0" + date_object.getDate()).slice(-2);
    let month = ("0" + (date_object.getMonth() + 1)).slice(-2);
    let year = date_object.getFullYear();
    let hours = date_object.getHours();
    let minutes = date_object.getMinutes();
    let seconds = date_object.getSeconds();

    var obj = {
        id: year + "-" + month + "-" + date + "/" + hours + ":" + minutes + ":" + seconds,
        processed: false,
        img: {
            //image location
            data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    //create the object with the model
    receiptModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            //name of image = item
			console.log("Saved receipt successfully");
            
            //call ocr script here to use the images saved locally preferably
 
            var dataToSend;

            //call the OCR python script once finished
            const python = spawn('python', ['./util/OCRScript.py']);
        
            // collect data from OCR script
            python.stdout.on('data', function (data) {
                dataToSend = data.toString();
            });
        
            //on close send data back to browser from the OCR script
            python.on('close', (code) => {
                console.log("Py OCR OUTPUT>> ", dataToSend);
                
            });
            //image has been processed by the OCR script
            item.processed = true;
            item.save();

            
        
            res.redirect('/receipt');
        }
    });
});

//export router
module.exports = router;