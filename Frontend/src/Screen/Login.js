import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { setAuth } from '../redux/actions/common';

//svg
import Logo from '../assets/images/Logo.svg'

const Login = () =>{
    const axios = require('axios')
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

    const CheckLogin = async () => {
        const postobj = {
            username:username,
            password:password
        }
        
        await axios.post("http://192.168.1.6:3000/login",postobj)
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

        return 0;
    }


    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.title}>
            <Logo/>
        </View>

        <View>
            <View style={styles.input_box}>
                <TextInput
                onChangeText={SetUsername}
                />
            </View>

            <View style={styles.input_box}>
                <TextInput
                onChangeText={SetPassword}
                />
            </View>
        </View>

        <View style={{paddingHorizontal: 75}}>
            <TouchableOpacity style={styles.btn} onPress={CheckLogin}>
                <Text style={styles.btn_text}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Register')}>
                <Text style={styles.btn_text}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgetpw_btn} onPress={() => navigation.push('ForgetPwd')}>
                <Text style={styles.forgetpw_btn_text}>Forget password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgetpw_btn} onPress={() => navigation.push('ForgetPwd')}>
                <Text style={styles.forgetpw_btn_text}>Privacy</Text>
            </TouchableOpacity>
        </View>



    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        padding: 30,
        marginVertical: 50,
    },

    input_box:{
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 20
    },
    forgetpw_btn:{
        marginTop:20,
    },

    forgetpw_btn_text:{
        marginTop:20,
        textAlign:'center',
        color:'black'
    },

    btn:{
        marginTop:20,
        backgroundColor: 'black',
        borderRadius: 50,
        paddingVertical: 17
        
    },
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 15,
    },
    title:{
        alignItems:'center',
    },
    title_text:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
       
    }
}) 
export default Login;