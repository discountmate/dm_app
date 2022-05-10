//use express
const express = require('express');
const { models } = require('mongoose');
const router = express.Router();
var multer = require('multer');
const upload = multer({dest: './uploads/'}) 
var receiptModel = require('../models/receipt');
var fs = require('fs');
const path = require('path');

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
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
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
            item.save();
			console.log("Saved receipt");
            res.redirect('/receipt');
        }
    });
});

//export router
module.exports = router;