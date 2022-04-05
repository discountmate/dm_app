//use express
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//routes
const shopRoute = require('./routes/shop');

//port to listen on
const ports = process.env.PORT || 3000;

//use bodyparser to format into json
app.use(bodyParser.json());

//endpoints
app.use('/shop', shopRoute);

//start listening
app.listen(ports, () => console.log('listening...'));

//open browser
const open = require('open');
const res = require('express/lib/response');
open('http://localhost:3000/shop');