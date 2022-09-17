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
                    <Text style={styles.title1_txt}>
                        Join DiscountMate 
                    </Text>
                    <Text style={styles.title2_txt}>
                        Step 4
                    </Text>
                </View>
    
                <Text style={styles.title3_txt}> Login Details</Text>
                <Text style={styles.title4_txt}> Please submit Email and Password </Text> 
    
                <Text style={styles.header_txt_email}>Email</Text>
                <View style={styles.input_box_email}> 
                    <TextInput style={styles.input_txt}>
                    </TextInput>
                </View>      

                <Text style={styles.header_txt_pass}>Password</Text>
                <View style={styles.input_box_pass}> 
                    <TextInput style={styles.input_txt}>
                    </TextInput>
                </View>   

                <Text style={styles.header_txt_cpass}>Confirm Password</Text>
                <View style={styles.input_box_cpass}> 
                    <TextInput style={styles.input_txt}>
                    </TextInput>
                </View>  

    
            <View>
                <TouchableOpacity style={styles.btn_send} onPress={infoCheck}>
                    <Text style={styles.btn_text}>Login</Text>
                </TouchableOpacity>
            </View>
    
            <View style= {styles.line_1}/> 
                   <View style= {styles.line_2}/> 
                   <Text style= {styles.or_txt}>Or</Text>  
                   
                    
            <Text style={styles.context_txt_msg2}> Already a member</Text>  
                <TouchableOpacity onPress={() => navigation.replace('Login')}>  
            <Text style={styles.context_txt_msg3}> Sign in </Text>  
                      
                    </TouchableOpacity>  
        </SafeAreaView>
        )
    
    }
    
    const styles = StyleSheet.create({
       
        container:{
        
        }, 
        header_txt_email:{
            fontSize:15, 
            color:'black',
            position: 'absolute',
            left: 57,
            top: 230,
            width:200,
            height:30,
            lineHeight: 18,
            fontWeight: '700'

        },
        input_box_email:{
            backgroundColor:'white',
            borderRadius: 50,            
            borderWidth:2,
            borderColor: 'black',
            position: 'absolute',
            left: 48,
            top: 250,
            width:315,
            height:40,
        }, 
        header_txt_pass:{
            fontSize:15, 
            color:'black',
            position: 'absolute',
            left: 57,
            top: 295,
            width:200,
            height:30,
            lineHeight: 18,
            fontWeight: '700'

        },
        input_box_pass:{
            backgroundColor:'white',
            borderRadius: 50,            
            borderWidth:2,
            borderColor: 'black',
            position: 'absolute',
            left: 48,
            top: 315,
            width:315,
            height:40,
        }, 
         header_txt_cpass:{
            fontSize:17, 
            color:'black',
            position: 'absolute',
            left: 57,
            top: 357,
            width:200,
            height:30,
            lineHeight: 18,
            fontWeight: '700'

        },
        input_box_cpass:{
            backgroundColor:'white',
            borderRadius: 50,            
            borderWidth:2,
            borderColor: 'black',
            position: 'absolute',
            left: 48,
            top: 380,
            width:315,
            height:40,
        }, 
        input_txt:{
            color:'black',
            fontSize:20,
            fontWeight: '700'
        }, 
        line_1:{
            position: "absolute",
            top: 550,
            left:0, 
            height:0,
            borderColor: '#171219',
            borderWidth: 1,  
            borderStyle: 'solid',
            width:'46%' 
        }, 
        line_2:{
            position: "absolute",
            top: 550,
            left:215, 
            height:0,
            borderColor: '#171219',
            borderWidth: 1,  
            borderStyle: 'solid',
            width:'46%' 
        }, 
        or_txt:{
            position: "absolute",
            top: 542,
            left:130,
            height:19,
            lineHeight:18,
            color:'black',
            width:140,
            textAlign:'center',
            fontSize:15,
            fontWeight: '700',
        },  
        
        context_txt_msg1:{
            fontSize:13,
            color:'black',
            fontWeight: '400',
            lineHeight: 16,           
            position: 'absolute',
            left: 48,
            top: 137,
            width:352,
            height:36,            
        },  
        context_txt_msg2:{
            fontSize:15,
            color:'black',
            fontWeight: '700',
            lineHeight: 16,           
            position: 'absolute',
            textAlign: 'center', 
            left:0,
            top: 580,
            width:395,
            height:38,   
           
        },  
        context_txt_msg3:{
            fontSize:15,
            color:'black',
            fontWeight: '700',
            lineHeight: 16,           
            position: 'absolute',
            textAlign: 'center', 
            left:0,
            top: 600,
            width:395,
            height:38,    
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#000"        
        },  
        title1_txt:{
            fontSize:15, 
            lineHeight: 36,
            position: 'absolute',
            left: 70,
            top: 34,
            width:250,
            height:40,
            fontWeight: '800',
            letterSpacing: 6
            
        },
        title2_txt:{
            fontSize:15, 
            lineHeight: 36,
            position: 'absolute',
            left: 145,
            top: 75,
            width:85,
            height:30,
            fontWeight: '800',
            letterSpacing: 6
            
        },
        title3_txt:{
            fontSize:24, 
            lineHeight: 36,
            color: "#4F44D0",
            position: 'absolute',
            left: 65,
            top: 115,
            width:250,
            height:36,
            fontWeight: '800',
            letterSpacing: 6
            
        },
        title4_txt:{
            fontSize:13, 
            lineHeight: 20,
            textAlign: "center",
            color: "#555555",
            position: 'absolute',
            left: 15,
            top: 175,
            width:360,
            height:36,
            fontWeight: '300',
            letterSpacing: 2
            
        }, 
        input_box1:{
            backgroundColor:'white', 
            borderWidth:1,
            borderColor: 'black',
            position: 'absolute',
            left: 52,
            top: 350,
            width:36,
            height:35, 
        },
        input_box2:{
            backgroundColor:'white', 
            borderWidth:1,
            borderColor: 'black',
            position: 'absolute',
            left: 118,
            top: 350,
            width:36,
            height:35, 
        },
        input_box3:{
            backgroundColor:'white', 
            borderWidth:1,
            borderColor: 'black',
            position: 'absolute',
            left: 175,
            top: 350,
            width:36,
            height:35, 
        },
         input_box4:{
            backgroundColor:'white', 
            borderWidth:1,
            borderColor: 'black',
            position: 'absolute',
            left: 230,
            top: 350,
            width:36,
            height:35, 
        },
        input_box5:{
            backgroundColor:'white', 
            borderWidth:1,
            borderColor: 'black',
            position: 'absolute',
            left: 286,
            top: 350,
            width:36,
            height:35, 
        },
        input_txt:{
            color:'black',
            fontSize:20,
            fontWeight: '700'
        }, 
        input_txt_email:{
            color:'black',
            fontSize:20,
            fontWeight: '700'
        },
        btn_send:{ 
            backgroundColor:'#4F44D0',
            position: 'absolute',  
            left: 62, 
            top: 460, 
            borderRadius: 50, 
            width:262,
            height:62, 
        },   
        btn_text:{
            color:'white',
            fontSize: 20,
            position: 'absolute',
            left: '15.57%',
            right: '15.34%',
            top: '30.36%',
            bottom: '34.16%',
            fontSize: 16,
            lineHeight: 22,
            textAlign:'center',
            fontWeight: '700'
        },    
    }) 
    export default Register4;