//const db = require('../util/database');
const generateAccessTokens = require("../util/generateAccessToken"); //used for login token
const mysql = require('mysql2');
const config = require('../config/config.json');
const bcrypt = require('bcrypt'); // this package is used for hashing.
const res = require("express/lib/response");

//create mysql pool to connect to MySQL db
const db = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

//model for the user table
module.exports = class user {
    constructor(id, username, password, email, mobile, permission, postcode, searchradius, active) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
        this.permission = permission;
        this.postcode = postcode;
        this.searchradius = searchradius;
        this.active = active;
    }

    //CREATE USER
    static createuser(username, password, email, mobile, postcode) {
        console.log("creating user...");
        //use the following items to create a new user
        username = username;
        password = password; //use bcrypt to encrypt the passwords, can add password salting later for more secure login
        email = email;
        mobile = mobile;
        postcode = postcode;
        const permission = 0; //admin is 1, user is 0
        const searchradius = 100; //default search radius (km)
        const active = 1; //user is active (1)

        //establish connection to db
        db.getConnection((err, connection) => 
        {
            console.log("creating user...1");
            if (err) throw (err)

            //sql search query
            const sqlSearch = "SELECT * FROM users WHERE username = ?"
            const search_query = mysql.format(sqlSearch,[username])

            //sql insert query
            const sqlInsert = "INSERT INTO users (username, password, email, mobile, permission, postcode, searchradius, active) VALUES (?,?,?,?,?,?,?,?)"
            const insert_query = mysql.format(sqlInsert,[username, password, email, mobile, permission, postcode, searchradius, active])
            console.log("creating user...2");
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
                    return(res.status(404))
                } 
                else 
                {
                    //if the user doesn't exist, insert new user
                    console.log("creating user...3");
                    connection.query (insert_query, (err, result)=> 
                    {
                        console.log("creating user...4");
                        connection.release()
                        if (err) throw (err)
                        console.log("creating user...5");
                        console.log ("--> Created new User")
                        console.log(result.insertId)
                    })
                }
            })
        })
    }

    //log in
    static login(username, password) {
        //user details
        username = username;
        password = password;
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
                    return(res.status(404))
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
                    } 
                    else 
                    {
                        console.log("-> Password Incorrect")
                        return(res.status(403))
                    }
                }
            })
        })
    }
    
    //change password
    static changePassword(username, password, newpassword) {
                //user details
                username = username;
                password = password;
                newpassword = newpassword;
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
                            return(res.status(404))
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
                                return db.execute('UPDATE users SET password = ? WHERE username = ?', [newpassword, username]);
                            } 
                            else 
                            {
                                console.log("-> Password Incorrect")
                                return(res.status(403))
                            }
                        }
                    })
                })
            }
        
}