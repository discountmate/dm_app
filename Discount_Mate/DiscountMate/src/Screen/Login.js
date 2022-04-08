import React from 'react';
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
import { setAuth } from '../redux/actions/common';

const Login = () =>{
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const CheckLogin = async () => {
        dispatch(setAuth(true));
        navigation.replace('Home');
        // console.log("login");
        return 0;
    }

    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.title_text}>DiscountMate</Text>
        </View>

        <View>
            <View style={styles.input_box}>
                <TextInput
                placeholder='Username'
                />
            </View>

            <View style={styles.input_box}>
                <TextInput
                placeholder='Password'
                />
            </View>
        </View>

        <View style={{padding: 30}}>
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
        marginVertical: 50
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