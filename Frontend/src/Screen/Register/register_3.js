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

const Register3 = () =>{
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const[pwd,setpwd] = useState('');
    const[repwd,setrepwd] = useState('');

    const infoCheck = async () => {
        //api
        //result = 
        //if(!result) {return;}

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
                    Step 3 of 4
                </Text>
            </View>

            <Text style={styles.header_txt}> Verification code</Text>
            <Text style={styles.context_txt}> Please Submit the 5 digit Verification code sent to {'\n'}
             your phone number</Text>

            <View style={{marginTop:23}}>
                <Text style={{alignSelf:'center', fontWeight:'bold', color:'black'}}>Verification Code </Text>
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

        <View style={{padding: 75}}>
            <TouchableOpacity style={styles.btn} onPress={infoCheck}>
                <Text style={styles.btn_text}>Verify Code</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', marginTop:23}}>
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

    context_txt:{
        fontSize:15,
        color:'black'
    },

    input_box_container:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },

    input_box:{
        backgroundColor:'black',
        width:'10%',
        color:'white'
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
        fontSize: 18,
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
export default Register3;