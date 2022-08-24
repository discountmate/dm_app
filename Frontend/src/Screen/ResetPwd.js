import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import api from '../core/Service';


const ResetPwd = () => {
    const navigation = useNavigation()
    const[pwd,setpwd] = useState('');
    const[repwd,setrepwd] = useState('');
    const username = useSelector(state => state.app.username)

    useEffect(()=>{
        console.log(pwd)
        console.log(repwd)
    })

    const infoCheck = async () => {

        await axios.put(`${api}/user/reset`,
        {username:username,
        password:pwd,
        newpassword:repwd} )
        .then(function (response){
            console.warn('Reset successful')
            navigation.goBack()
            

        })
        .catch(function (error){
            console.log(error)
        })
    }


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.title}>
                    <Text style={styles.title_txt}>
                       Reset Password
                    </Text>
                    
                </View>
    
                <Text style={styles.header_txt}> New Password</Text>
                <Text style={styles.context_txt}> Please submit password</Text>
    
                <View style={{marginTop:23}}>
                    <Text style={{marginLeft:5, color:'black'}}>Old Password</Text>
                        <View style={styles.input_box}>
                            <TextInput style={{color:'white'}} onChangeText={setpwd}/>
                        </View>

                    <Text style={{marginLeft:5, color:'black', marginTop:20}}>New Password</Text>
                        <View style={styles.input_box} >
                            <TextInput style={{color:'white'}} onChangeText={setrepwd}/>
                        </View>
                </View>
            </View>
    
            <View style={{padding: 75, marginTop:20}}>
                <TouchableOpacity style={styles.btn} onPress={infoCheck}>
                    <Text style={styles.btn_text}>Submit</Text>
                </TouchableOpacity>
            </View> 
        </SafeAreaView>
    )
    
}
    
    const styles = StyleSheet.create({
        container:{
            justifyContent:"center",
        },
        
        title:{
            backgroundColor:'grey',
            alignItems:'center',
            paddingVertical:13
        },
    
        title_txt:{
            fontWeight:'bold',
            color:'black'
       
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
export default ResetPwd;