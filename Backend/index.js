//use express
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //middleware used to handle request bodies
const errorController = require('./controllers/error'); //error handling
const mongoose = require('mongoose'); //used to access the MongoDB
require("dotenv").config(); //used to access the .env file easily
const bcrypt=require('bcrypt');

//routes from /routes/
const shopRoute = require('./routes/shop');
const itemRoute = require('./routes/item');
const receiptRoute = require('./routes/receipt')
const ocrRoute = require('./routes/ocrRoute');
const userRoute = require('./routes/user');
const viewReceiptRoute = require('./routes/viewReceipt');

//port to listen on from .ENV file
const ports = process.env.PORT || 3000;

//use body parser and ejs
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");

//connect to MongoDB
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected to MongoDB')
    });

//endpoints from routes.
app.use('/shop', shopRoute);
app.use('/item', itemRoute);
app.use('/receipt', receiptRoute);
app.use('/OCR', ocrRoute);
app.use('/user', userRoute);
app.use('/view', viewReceiptRoute);

//error handling if no route is present etc
app.use(errorController.get404);
app.use(errorController.get500);

//start listening
app.listen(ports, () => console.log('listening...'));

//open browser, uncomment the three lines below for auto open browser
const open = require('open');
const res = require('express/lib/response');
//open('http://localhost:3000/');


// password hashing function
async function passHash(password){
	// to use we need to make it async 
	const salt = await bcrypt.genSalt();  // as we are using await we need to make it async and it should be used under async functions only
	// the hash needs two args password adn the salt
	password = await bcrypt.hash(password, salt); 
}
