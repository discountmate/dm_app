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
        
        navigation.navigate('Register3');
        return 0;
    }


    return(
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.title_txt}>
                    Join DiscountMate 
                </Text>
                <Text style={styles.title_txt}>
                    Step 1 of 3
                </Text>
            </View>

            <Text style={styles.header_txt}>Enter Email Address</Text>
            <Text style={styles.context_txt}>
                Your Email Address helps us keep your
                account secure. See our privacy policu for more info</Text>

            <View style={{marginTop:75}}>
                <Text style={styles.email_input_txt}>Email Address</Text>
                    <View style={styles.input_box}>
                        <TextInput
                        style={{color:'white'}}
                        onChangeText={SetUserName}
                        
                        />
                    </View>
            </View>
        </View>

        <View style={{paddingHorizontal:58, marginTop:62}}>
            <TouchableOpacity style={styles.btn} onPress={infoCheck}>
                <Text style={styles.btn_text}>Send Verification Code</Text>
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
        paddingHorizontal:20
    },
    
    title:{
        alignItems:'center',
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

    input_box:{
        borderWidth:1,
        borderRadius:20,
        height:40,
        justifyContent:'center',
        paddingHorizontal:10,
        marginTop:10
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
        fontSize: 16,
        fontWeight:'700',
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

    email_input_txt:{
        marginLeft:10,
        textAlign:'center',
        fontSize:17,
        fontWeight:'700',
        
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
        marginTop:124,
        justifyContent:'space-between'
    },
}) 
export default Register;