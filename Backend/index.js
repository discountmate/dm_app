//use express
const express = require('express');
const app = express();

//routes
const shopRoute = require('./routes/shop');

//port to listen on
const ports = process.env.PORT || 3000;

//endpoints
app.use('/shop', shopRoute);

//start listening
app.listen(ports, () => console.log('listening...'));

//open browser
const open = require('open');
open('http://localhost:3000/');