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
import { SetUsername } from '../../redux/actions/common';

const Register = () =>{
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [username, SetUserName] = useState('');

    const infoCheck = async () => {
        dispatch(SetUsername(username))
        
        navigation.navigate('Register2');
        return 0;
    }


    return(
    <SafeAreaView style={styles.container}>
        <View>
            <View>
                <Text style={styles.title1_txt}>
                    Join DiscountMate 
                </Text>
                <Text style={styles.title2_txt}>
                    Step 2
                </Text>
            </View>

            <Text style={styles.title3_txt}> Enter Email Address</Text>
            <Text style={styles.title4_txt}> Your email address helps us keep your  {'\n'}
            account secure. See your privacy policy for {'\n'}
            more info
            </Text> 

            <Text style={styles.header_email_txt}>Email Address</Text>
            <View style={styles.input_box_email}> 
                <TextInput style={styles.input_txt_email}>
                   
                </TextInput>
            </View>      
           
        </View>

        <View>
            <TouchableOpacity style={styles.btn_send} onPress={() => navigation.replace('Register3')}>  
                <Text style={styles.btn_text}>Send Verification Code</Text>
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
        left: 156,
        top: 67,
        width:92,
        height:40,
        fontWeight: '800',
        letterSpacing: 6
        
    },
    title3_txt:{
        fontSize:24, 
        lineHeight: 36,
        color: "#4F44D0",
        position: 'absolute',
        left: 20,
        top: 115,
        width:440,
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
    header_email_txt:{
        fontSize:17, 
        lineHeight: 36,
        position: 'absolute',
        left: 90,
        top: 285,
        width:190,
        height:36,
        fontWeight: '700',
        letterSpacing: 6
        
    },
    input_box_email:{
        backgroundColor:'white',
        borderRadius: 50,            
        borderWidth:1,
        borderColor: 'black',
        position: 'absolute',
        left: 40,
        top: 328,
        width:315,
        height:40, 
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
        top: 430, 
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
export default Register;