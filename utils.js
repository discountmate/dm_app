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

module.exports = { getCode, sendMail}