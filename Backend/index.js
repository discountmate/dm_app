//use express
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const errorController = require('./controllers/error');

//routes
const shopRoute = require('./routes/shop');
const itemRoute = require('./routes/item');
//port to listen on
const ports = process.env.PORT || 3000;

//use bodyparser to format into json
app.use(bodyParser.json());

//allow method types and headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

//endpoints
app.use('/shop', shopRoute);
app.use('/item', itemRoute);

//error handling
app.use(errorController.get404);

app.use(errorController.get500);

//start listening
app.listen(ports, () => console.log('listening...'));

//open browser
const open = require('open');
const res = require('express/lib/response');

open('http://localhost:3000/');