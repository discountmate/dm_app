import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { SetPhoneNum, SetUsername } from '../../redux/actions/common';
import api from '../../core/Service';

const Register4 = () =>{
    const phone = useSelector(state => state.app.mobile)
    const username = useSelector(state => state.app.username)
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const[email, setEmail] = useState('');
    const[pwd,setpwd] = useState('');
    const[repwd,setrepwd] = useState('');

    const infoCheck = async () => {
        
        if(!pwdcheck()){
            console.warn("Register False!");
            return;
        }

        const postobj = {
            username:username,
            password:repwd,
            email:email,
            mobile:phone,
            permission:'0',
            postcode:'2020',
            searchradius:'200',
            active:'1'
        }

        await axios.post(`${api}/user/create`,postobj)
        .then(function (response) {
                console.warn("Register success!");
                dispatch(SetPhoneNum(''))
                dispatch(SetUsername(''))
                navigation.navigate('Login');
            })
        .catch(function (error) {
            console.warn(error);
            console.warn('register failed');
            return;
        })
      
        return 0;
    }

    const pwdcheck = () =>{
        console.log('pw: ', pwd);
        console.log('repw:', repwd);

        if(pwd != repwd) {
            return false;
        }
    return true;

    }

    return(
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.title}>
                <Text style={styles.title_txt}>
                    Join DiscountMate 
                </Text>
                <Text style={styles.title_txt}>
                    Step 1 of 4
                </Text>
            </View>

            <Text style={styles.header_txt}> Welcome to DiscountMate</Text>
            <Text style={styles.header_txt}> Let's get started</Text>

            <View style={{marginTop:5}}>
                <Text style={{marginLeft:10}}>Email </Text>
                    <View style={styles.input_box}>
                        
                        <TextInput style={{color:'white'}}
                        onChangeText={setEmail}
                        />
                    </View>
            </View>
            

            <View style={{marginTop:5}}>
                <Text  style={{marginLeft:10}}>Password</Text>
                    <View style={styles.input_box}>
                        
                        <TextInput style={{color:'white'}}
                        onChangeText={setpwd}
                        />
                    </View>
            </View>

            <View style={{marginTop:5}}>
                <Text  style={{marginLeft:10}}>Confirm Password </Text>
                    <View style={styles.input_box}>
                        
                        <TextInput style={{color:'white'}}
                        onChangeText={setrepwd}
                        />
                    </View>
            </View>

        </View>

        <View style={{paddingHorizontal:75, marginTop:40, marginBottom:75}}>
            <TouchableOpacity style={styles.btn} onPress={infoCheck}>
                <Text style={styles.btn_text}>Login</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={styles.line}/>
            <Text style={styles.or_txt}>or</Text>
            <View style={styles.line}/>
        </View>

        <TouchableOpacity style={styles.signin_btn} onPress={() => navigation.replace('Login')}>
            <Text style={styles.signin_txt}>Already a member? Sign in</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
    },
    
    title:{
        backgroundColor:'grey',
        alignItems:'center'
    },

    title_txt:{
        fontWeight:'bold'
    },

    header_txt:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },

    input_box:{
        backgroundColor:'black'
    },

    btn:{
        marginTop:20,
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 10
        
    },
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 20,
    },

    line:{
        flex:1,
        height:1,
        backgroundColor:'black'
    },
    
    or_txt:{
        color:'black',
        width:20,
        textAlign:'center'
    },

    signin_btn:{
        marginTop:55,
        alignSelf:'center'
    },

    signin_txt:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    }
}) 
export default Register4;