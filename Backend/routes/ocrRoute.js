//use express
const express = require('express');
const router = express.Router();
const {spawn} = require('child_process');

router.get('/', (req, res) => {
 
    var dataToSend;

    //call the OCR python script once finished
    const python = spawn('python', ['./util/OCRScript.py']);

    // collect data from OCR script
    python.stdout.on('data', function (data) {
        dataToSend = data.toString();
    });

    //on close send data back to browser from the OCR script
    python.on('close', (code) => {
    res.send(dataToSend)
    });

})

//export router
module.exports = router;