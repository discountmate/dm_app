import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import env from '../core/Service'

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { setAuth, SetUsername } from '../redux/actions/common';
import * as Service from '../core/Service';


//svg
import Logo from '../assets/images/New_Logo.svg'

const Login = () =>{
    const axios = require('axios')
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [username, SetUserName] = useState("");
    const [password, SetPassword] = useState("");
    const api = Service.default;


    const CheckLogin = async () => {
        const postobj = {
            username:username,
            password:password
        }
        
        
        await axios.post(`${api}/user/login`, postobj)
        .then(function (response) {
                dispatch(setAuth(true));
                dispatch(SetUsername(username))
                navigation.replace('Profile');
              
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
            <Logo />
        </View>

        <View style={{marginTop: 20}}>
            <View style={styles.input_box}>
                <TextInput
                placeholder='Username'
                onChangeText={SetUserName}
                />
            </View>

            <View style={styles.input_box}>
                <TextInput
                placeholder='Password'
                onChangeText={SetPassword}
                />
            </View>
        </View>

        <View style={{paddingHorizontal: 40, marginTop: 16}}>
            <TouchableOpacity style={styles.btn} onPress={navigation.replace('Main')}>
                <Text style={styles.btn_text}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Register')}>
                <Text style={styles.btn_text}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgetpw_btn} onPress={() => navigation.push('ForgetPwd')}>
                <Text style={styles.forgetpw_btn_text}>Forget password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgetpw_btn} >
                <Text style={styles.forgetpw_btn_text}>Privacy</Text>
            </TouchableOpacity>
        </View>



    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        marginVertical: 50,
    },

    input_box:{
        borderWidth: 2,
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
        marginTop:16,
        backgroundColor: '#4F44D0',
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