const {spawn} = require('child_process');

//const childPython =spawn('python',['--version']); //prints out the version of python we are using 
const childPython =spawn('python',['OCRScript.py']); //prints out the version of python we are using 


childPython.stdout.on('data',(data) => { // prints the ocr out put here you can add the logic to send the ocr data to the frontend
    console.log(`stdout: ${data}`);
});

childPython.stderr.on('data',(data) => {
    console.error(`stderr: ${data}`);
});

childPython.on('close',(code)=>{
    console.log(`process closed with code ${code}`);
});