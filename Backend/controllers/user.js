const User = require('../models/user');
const bcrypt = require('bcrypt'); // this package is used for hashing.
const mysql = require('mysql2');
const config = require('../config/config.json');
const generateAccessTokens = require("../util/generateAccessToken"); //used for login token

//create mysql pool to connect to MySQL db
const db = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

//create new user
exports.createUser = async (req, res, next) => {
    try {
        console.log("creating user...");
        //use the following items to create a new user
        username = req.body.username;
        password = await bcrypt.hash(req.body.password,10); //use bcrypt to encrypt the passwords, can add password salting later for more secure login
        email = req.body.email;
        mobile = req.body.mobile;
        postcode = req.body.postcode;
        const permission = 0; //admin is 1, user is 0
        const searchradius = 100; //default search radius (km)
        const active = 1; //user is active (1)

        //establish connection to db
        db.getConnection((err, connection) => 
        {
            if (err) throw (err)

            //sql search query
            const sqlSearch = "SELECT * FROM users WHERE username = ?"
            const search_query = mysql.format(sqlSearch,[username])

            //sql insert query
            const sqlInsert = "INSERT INTO users (username, password, email, mobile, permission, postcode, searchradius, active) VALUES (?,?,?,?,?,?,?,?)"
            const insert_query = mysql.format(sqlInsert,[username, password, email, mobile, permission, postcode, searchradius, active])
            //start search query
            connection.query (search_query, (err, result) => 
            {
                if (err) throw (err)
                console.log("-> Search Results")
                console.log(result.length)
                if (result.length != 0) 
                {
                    connection.release()
                    console.log("-> User already exists")
                    res.status(404).send("User already exists");
                } 
                else 
                {
                    //if the user doesn't exist, insert new user
                    connection.query (insert_query, (err, result)=> 
                    {
                        connection.release()
                        if (err) throw (err)
                        console.log ("--> Created new User")
                        console.log(result.insertId)
                        res.status(200).send("User created successfully");
                    })
                }
            })
        })
    } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}

//log in
exports.Login = async (req, res, next) => {
try {
     //user details
     username = req.body.username;
     password = req.body.password;
     //start db connection
     db.getConnection ( async (err, connection)=> 
     {
         if (err) throw (err)
         //sql search query
         const sqlSearch = "Select * from users where username = ?"
         const search_query = mysql.format(sqlSearch, [username])
 
         //query db
         connection.query (search_query, async (err, result) => 
         {
             connection.release()
             
             if (err) throw (err)
             //if no results
             if (result.length == 0) 
             {
                 console.log("-> User does not exist")
                 res.status(404).send("Username does not exist");
             } 
             else 
             {
                 //if there is a result
                 const hashedPassword = result[0].password
 
                 //get the hashedPassword from result
                 if (await bcrypt.compare(password, hashedPassword)) 
                 {
                     //generate access token
                     console.log("--> Login Successful")
                     console.log("--> Generating accessToken")
                     const accessToken =  generateAccessTokens({username: username})
                     console.log({accessToken: accessToken})
                     res.status(200).send("Login successful, token: " + accessToken.toString());
                 } 
                 else 
                 {
                     console.log("-> Password Incorrect")
                     res.status(403).send("Incorrect Password");
                 }
             }
         })
     })
     
} catch (err) {
    console.log("error:", err);
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
    }
}

//reset password
exports.ResetPassword = async (req, res, next) => {
    try {
        //user details
        username = req.body.username;
        password = req.body.password;
        newpassword = await bcrypt.hash(req.body.newpassword,10);;
        //start db connection
        db.getConnection ( async (err, connection)=> 
        {
            if (err) throw (err)
            //sql search query
            const sqlSearch = "Select * from users where username = ?"
            const search_query = mysql.format(sqlSearch, [username])

            //query db
            connection.query (search_query, async (err, result) => 
            {
                connection.release()
                
                if (err) throw (err)
                //if no results
                if (result.length == 0) 
                {
                    console.log("-> User does not exist")
                    res.status(404).send("User does not exist");
                } 
                else 
                {
                    //if there is a result
                    const hashedPassword = result[0].password

                    //get the hashedPassword from result
                    if (await bcrypt.compare(password, hashedPassword)) 
                    {
                        //generate access token
                        console.log("--> Password reset")
                        //return db.execute('UPDATE users SET password = ? WHERE username = ?', [newpassword, username]);
                        connection.query ('UPDATE users SET password = ? WHERE username = ?', [newpassword, username], async (err, result) => 
                        {
                            connection.release()
                            
                            if (err) throw (err)
                            //if no results
                            if (result.length == 0) 
                            {
                                console.log("-> User does not exist")
                                res.status(404).send("Error resetting password");
                            } 
                            else 
                            {
                                res.status(200).send("Password reset seccessfully");
                            }
                        })
                    
                    } 
                    else 
                    {
                        console.log("-> Password Incorrect")
                        res.status(403).send("Password Incorrect");
                    }
                }
            })
        })
        //use password hashing
        //const newpassword = await bcrypt.hash(req.body.newpassword,10);
        //const loginResponse = await User.changePassword(req.body.username, req.body.password, newpassword);
        //res.status(200).json(loginResponse);
    } catch (err) {
        console.log("error:", err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        }
}