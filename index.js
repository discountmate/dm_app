const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const mongoose = require('mongoose')
const userSchema = require('./schema/user-schema');
const verifiedUserSchema = require('./schema/verify-user-schema')

const uri = process.env.URI
sgMail.setApiKey(process.env.ID_API_KEY)

const getCode = async(result,size,email) => {
    for (let i = 0; i < size; i++){
        let response = result[i]
        if (response['email'] == email){
            let verifyCode = response['code']
            return verifyCode;
        }
    }

}

const sendMail = async (msg) => {
    try {
        await sgMail.send(msg)
        console.log("Message sent!")
    } catch (error) {
        console.log(error);
        if(error.response){
            console.error(error.response.body);
        }
    }
};

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/' , async (req,res)=>{
    const email = req.body.email
    const name = req.body.name
    const code = 123

    sendMail({
        to: String(email),
        from: "sit3132.1ptask@gmail.com",
        subject: "Confirm Email",
        text: "Thank you for singing up for databytes!, please confirm your email" + String(code),
    });
    console.log(email)

    await mongoose.connect(uri);
    console.log("Connected to MongoDb");
    const user = {  
        email: String(email),
        name: String(name),
        code: code,
    }
    await new userSchema(user).save()
})

app.post('/auth' , async (req,res)=>{
    const code = req.body.code
    const email = req.body.emailVer
    const name = "test"
    console.log(code)

    const connection = await mongoose.connect(uri);



    const result = await userSchema.find()
        
    const value = result[4];
    const size = result.length;
        
    console.log(value['code'])
        
    const verifyCode = await getCode(result,size,email);
    console.log("returned code")
    console.log(verifyCode);
    console.log("actual")
    console.log(code);
    if (code == verifyCode){
        const verified_user = {  
            email: String(email),
        }
        new verifiedUserSchema(verified_user).save()
    }
    return;
})


app.listen(8080, (req,res) => {
    console.log("Server is running")
})
