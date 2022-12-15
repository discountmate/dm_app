import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {setAuth, SetUsername, SetID, SetPhoneNum, SetEmail, SetToken} from '../redux/actions/common';
import * as Service from '../core/Service';

//svg
import Logo from '../assets/images/New_Logo.svg'

const Login = () => {
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
                dispatch(SetUsername(username));
                dispatch(SetID(response.data.user_id));
                dispatch(SetPhoneNum(response.data.phone));
                dispatch(SetEmail(response.data.email));
                dispatch(SetToken(response.data.token));
                navigation.replace('Recommended');
            })
            .catch(function (error) {
                console.warn(error);
                return;
            })
        return 0;
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Logo />
                </View>
                <View style={{ marginTop: 20 }}>
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
                <View style={{ paddingHorizontal: 40, marginTop: 16 }}>
                    <TouchableOpacity style={styles.btn} onPress={() => CheckLogin()}>
                        <Text style={styles.btn_text}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Register')}>
                        <Text style={styles.btn_text}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.forgetpw_btn, { paddingHorizontal: 71 }]} onPress={() => navigation.replace('ForgetPwd')}>
                        <Text style={styles.forgetpw_btn_text}>Forget password</Text>
                        <View style={styles.border} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forgetpw_btn} >
                        <Text style={styles.forgetpw_btn_text}>Privacy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        marginVertical: 50
    },
    input_box:{
        borderWidth: 2,
        borderRadius: 50,
        marginTop: 20,
        fontSize:20,
        height:56,
        justifyContent:'center',
        paddingHorizontal:10
    },
    forgetpw_btn:{
        marginTop:20,
    },
    forgetpw_btn_text: {
        marginTop:20,
        textAlign:'center',
        color:'black',
        borderColor: 'black'
    },
    btn: {
        marginTop:16,
        backgroundColor: '#4F44D0',
        borderRadius: 50,
        paddingVertical: 17
    },
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 15
    },
    title:{
        alignItems:'center',
    },
    title_text:{
        fontSize:30,
        fontWeight:'bold',
        color: 'black'
    },
    border:{
        flex:0.28,
        borderBottomWidth: 1
    }
})

export default Login;