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

const Register = () =>{
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const[pwd,setpwd] = useState('');
    const[repwd,setrepwd] = useState('');

    const infoCheck = async () => {
        //api
        //result = 
        //if(!result) {return;}
        if(!pwdcheck()){
            console.warn("Register False!");
            return;
        }
        console.warn("Register success!");

        navigation.navigate('Login');
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
            <View style={styles.input_box}>
                <TextInput
                placeholder='Email'
                />
            </View>

            <View style={styles.input_box}>
                <TextInput
                placeholder='Username'
                />
            </View>

            <View style={styles.input_box}>
                <TextInput
                placeholder='Password'
                onChangeText={text => setpwd(text)}
                />
            </View>

            <View style={styles.input_box}>
                <TextInput
                placeholder='Input password again'
                onChangeText={text =>setrepwd(text)}
                />
            </View>

        </View>

        <View style={{padding: 30}}>
          

            <TouchableOpacity style={styles.btn} onPress={infoCheck}>
                <Text style={styles.btn_text}>Sign Up</Text>
            </TouchableOpacity>

      
        </View>



    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        justifyContent:"center",
    },

    input_box:{
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20
    },
    forgetpw_btn:{
        marginTop:20,
    },

    forgetpw_btn_text:{
        marginTop:20,
        textAlign:'center',
    },

    btn:{
        marginTop:20,
        backgroundColor: 'grey',
        borderRadius: 20,
        paddingVertical: 10
        
    },
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 20,
    }
}) 
export default Register;