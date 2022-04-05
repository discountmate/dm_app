/*
This file connects to the MySQL database
*/

//use mysql2 package
const mysql = require('mysql2');

//use details in config.json to login
const config = require('../config/config.json');

//create mysql pool
const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

//export
module.exports = pool.promise();