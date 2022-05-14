//use mongoose
var mongoose = require('mongoose');
  
//defince receipt schema
var receiptSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

//export
module.exports = new mongoose.model('Receipts', receiptSchema);