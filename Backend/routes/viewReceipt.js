//use express
const express = require('express');
const router = express.Router();
var receiptModel = require('../models/receipt');


//get request for the receipt upload, shows the index.ejs debug page for now.
router.get('/', (req, res) => {
    //use mongoose to define shema
    receiptModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('receipt', { items: items });
        }
    });
});

//post an ID to get the corresponding image converted from binary to base64
router.post('/', (req, res) => {
    receiptModel.findById(req.body.id, function (err, docs) {
        if (err){
            console.log(err);
            res.status(404).send("Not found");
        }
        else{
            //console.log("Result : ", docs);
            //convert to base64 image
            const imgBase64 = docs.img.data.toString("base64");
            //send html to web client
            const html = `<html><body><img src='data:image/png;base64,${imgBase64}'/></body></body></html>`
            res.status(200).send(html)

        }
    })
})




//export router
module.exports = router;