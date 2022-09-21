import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Register3 = () =>{
    const navigation = useNavigation();


    const infoCheck = async () => {
        navigation.navigate('Register4');
        return 0;
    }

 


    return(
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.title}>
                <Text style={styles.title_txt}>
                    Join DiscountMate 
                </Text>
                <Text style={styles.title_txt}>
                    Step 2 of 3
                </Text>
            </View>

            <Text style={styles.header_txt}> Verification code</Text>
            <Text style={styles.context_txt}> Please Submit the 5 digit Verification code sent to {'\n'}
             your phone number</Text>

            <View style={{marginTop:73}}>
                <Text style={styles.ver_input_txt}>Verification Code </Text>
                    <View style={styles.input_box_container}>
                        
                        <TextInput style={styles.input_box}
                        
                        />
                         <TextInput style={styles.input_box}
                        
                        />
                         <TextInput style={styles.input_box}
                        
                        />
                         <TextInput style={styles.input_box}
                        
                        />
                         <TextInput style={styles.input_box}
                        
                        />
                    </View>
            </View>

        </View>

        <View style={{paddingHorizontal:58, marginTop:89}}>
            <TouchableOpacity style={styles.btn} onPress={infoCheck}>
                <Text style={styles.btn_text}>Verify Code</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.orline}>
            <View style={styles.line}/>
            <Text style={styles.or}>or</Text>
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
        alignItems:'center'
    },

    title_txt:{
        fontWeight:'bold',
        marginTop:10
    },

    header_txt:{
        fontSize:24,
        fontWeight:'800',
        color:'#4F44D0',
        marginTop:10,
        textAlign:'center'
    },

    context_txt:{
        fontSize:13,
        color:'#555555',
        textAlign:'center',
        marginTop:10
    },

    input_box_container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:29
    },

    input_box:{
        width:36,
        height:35,
        borderWidth:1
    },

    btn:{
        marginTop:20,
        backgroundColor: '#4F44D0',
        borderRadius: 50,
        height:62,
        justifyContent:'center'        
    },
    
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 18,
    },

    or:{
        fontSize:15,
        fontWeight:'700',
        bottom:10
    },

    line:{
        width:175,
        borderTopWidth:1
    },

    orline:{
        flexDirection:"row",
        marginTop:85,
        justifyContent:'space-between'
    },

    signin_btn:{
        marginTop:55,
        alignSelf:'center'
    },

    signin_txt:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },

    ver_input_txt:{
        alignSelf:'center',
        fontWeight:'700',
        fontSize:17,
        color:'black'
    }, 
}) 
export default Register3;