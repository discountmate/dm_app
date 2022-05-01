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

            <View style={{marginTop:23}}>
                <Text style={{marginLeft:10}}>First Name </Text>
                    <View style={styles.input_box}>
                        
                        <TextInput
                        
                        />
                    </View>
            </View>
            

            <View style={{marginTop:23}}>
                <Text  style={{marginLeft:10}}>Last Name </Text>
                    <View style={styles.input_box}>
                        
                        <TextInput
                        
                        />
                    </View>
            </View>

        </View>

        <View style={{padding: 75}}>
            <TouchableOpacity style={styles.btn} onPress={infoCheck}>
                <Text style={styles.btn_text}>Next</Text>
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
export default Register;