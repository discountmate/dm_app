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

const Register2 = () =>{
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const[pwd,setpwd] = useState('');
    const[repwd,setrepwd] = useState('');

    const infoCheck = async () => {
        //api
        //result = 
        //if(!result) {return;}
    

        navigation.navigate('Register3');
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
                    Step 2 of 4
                </Text>
            </View>

            <Text style={styles.header_txt}> Enter Mobile Number</Text>
            <Text style={styles.context_txt}> Your  mobile  number helps us keep your account{'\n'} secure. See our privacy policu for more info </Text>

            <View style={{marginTop:23}}>
                <Text style={{marginLeft:10}}>Mobile number </Text>
                    <View style={styles.input_box}>
                        
                        <TextInput style={{color:'white'}}
                        
                        />
                    </View>
            </View>

        </View>

        <View style={{padding: 75}}>
            <TouchableOpacity style={styles.btn} onPress={infoCheck}>
                <Text style={styles.btn_text}>send Verification Code</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', marginTop: 23}}>
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

    input_box:{
        backgroundColor:'black'
    },

    btn:{
        marginTop:20,
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 12
        
    },
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 15,
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
        marginBottom:99,
        alignSelf:'center'
    },

    signin_txt:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    }
}) 
export default Register2;