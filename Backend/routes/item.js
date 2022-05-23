//use express
const express = require('express');
const router = express.Router();

//controller
const itemController = require('../controllers/item');
const item = require('../models/item');
var fs = require('fs');
const path = require('path');
const mysql = require('mysql2'); //used for mysql calls
const config = require('../config/config.json'); //used to get db details
const res = require('express/lib/response');
require("dotenv").config(); //used to access the .env file easily

//spawn the python process

//create mysql pool to connect to MySQL db
const db = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

async function getRecommendedItems(res)
{
    itemList = [];
    RecoList = await db.promise().query("SELECT * FROM recommendation WHERE userid = ?", [process.env.USERID]);
    console.log(RecoList[0]);
    for(i in RecoList[0])
    {
       var item = await db.promise().query("SELECT * FROM items WHERE id = ?", [RecoList[0][i].itemid]);
       
       itemList.push(item[0]);
    }
    //console.log(itemList);
    res.status(201).json(itemList);

}
//get request
router.get('/', itemController.getAllItems)

//post shop
router.post('/', itemController.postItem);

//put request
router.put('/', itemController.putItem);

//get recommended items
router.get('/recommend', (req, res, next) => {
    try
    {
        getRecommendedItems(res);
    }
    catch
    {
        res.send(500).send("Error loading recommended items");
    }

});

//search get request
router.get('/search?', itemController.searchItems)

//export router
module.exports = router;