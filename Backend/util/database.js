/*
This file connects to the MySQL database
*/

//use mysql2 package
const mysql = require('mysql2');

//use details in config.json to login
const config = require('../config/config.json');

//create mysql pool to connect to MySQL db
const pool = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

//check connection to MySQL server
pool.on('connection', function (connection) {
    console.log("Connected to MySQL server");
});

//check for errors
pool.on('error', function (error) {
    console.error('MySQL server error: ', error.code);
  });

//export
module.exports = pool.promise();