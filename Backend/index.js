//use express
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const errorController = require('./controllers/error');
const session = require('express-session');
const path = require('path');
const db = require('./util/database');
const config = require('./config/config.json');
const mysql = require('mysql2');

//routes
const shopRoute = require('./routes/shop');
const itemRoute = require('./routes/item');

//port to listen on
const ports = process.env.PORT || 3000;

//login connection, need to change to use database.js instead with pool
const connection = mysql.createConnection({
  connectionLimit: config.connectionLimit,
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database
});

//login
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

//login modules
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

//login route
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/logintest/login.html'));
});

//authenticate user
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//home test
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

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