import axios from "axios";

export async function LoginAPI(postObj) {
    await axios.post("http://localhost:3000/login", postObj)
        .then(function (response) {
            if (response?.data == "Password incorrect!") {
                console.warn('login failed');
                return;
            }
            dispatch(setAuth(true));
            navigation.replace('Main');
        })
        .catch(function (error) {
            console.warn('login failed');
            return;
        })
    return resp;
}

export async function UploadPhoto(postObj) {
    await axios.post("http://localhost:3000/createuser",postobj)
    return resp;
  }