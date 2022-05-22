//use express
const express = require('express');
const router = express.Router();
const {spawn} = require('child_process');
const { nextTick } = require('process');

const {PythonShell} = require('python-shell');

router.get('/', (req, res) => {
let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    args: ['./util/Tesseract-OCR/tesseract.exe', './uploads/wxwg74gj02831.jpg']
}

PythonShell.run('./util/OCRScript.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
    res.send(results);
    
});
})

//export router
module.exports = router;