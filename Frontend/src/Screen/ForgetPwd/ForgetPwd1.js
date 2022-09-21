import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from "react-native";

//svg
import Email from '../../assets/images/email.svg';


const ForgetPwd1 = () => {
    const navigation = useNavigation();
    const [phone, SetUserPhone] = useState("");
    const [dob_d, SetDoBD] = useState("");
    const [dob_m, SetDoBM] = useState("");
    const [dob_y, SetDoBY] = useState("");

    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.context_txt_msg1}> 
             <Text style={styles.header_txt}> Password reset link sent </Text>
              {/* <Email style={{marginTop:40}} />     */}
            
           
            </View>
           
            <Text style={styles.context_txt_msg2}> 
                 We have sent an email to ****{'\n'} {phone} ****.com click the link to rest your password
                </Text>    
            
                <TouchableOpacity style={styles.btn_resend} onPress = {() => navigation.push('ForgetPwd2')}>
                    <Text style={styles.btn_text}>Resend email</Text>
                </TouchableOpacity> 
            
        </SafeAreaView>
    )
    
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
    },
    context_txt_msg1:{
        fontSize:17,
        color:'#333333', 
        lineHeight: 36,           
        position: 'absolute',
        left: 48,
        top: 137,
        width:244,
        height:36,    
        fontWeight: '700'        
    },  
    context_txt_msg2:{
        fontSize:17,
        color:'#333333',
        fontWeight: '400',      
        lineHeight: 21,           
        position: 'absolute',
        left: 48,
        top: 197,
        width:299,
        height:68,            
    },  
    btn_resend:{
        fontSize:20,
        backgroundColor:'#4F44D0',
        position: 'absolute',
        left: 67, 
        top: 500, 
        borderRadius: 50, 
        width:262,
        height:62,
        
    },
    btn_text:{
        color:'white',
        fontSize: 20,
        position: 'absolute',
        left: '30.18%',
        right: '29.85%',
        top: '30.36%',
        bottom: '34.16%',
        fontSize: 16,
        lineHeight: 22,
        textAlign:'center',
        fontWeight: '700'
    }, 
    message:{  
       margin: 10  
    },
    context_txt:{
        fontSize:15,
        color:'black',
        textAlign: "left",
        lineHeight: 30
    },
    title_txt:{
        fontWeight:'bold',
        color:'black',
        fontSize:20,
   
    },

    header_txt:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }, 

    input_box:{
        backgroundColor:'white',
        borderRadius: 20,
        margin: 10,
        marginLeft:0,
        borderWidth:2,
        borderColor: 'black'
    },
    inline_inputs:{
        justifyContent: 'space-around',    
        flexDirection: "row"
    },        
    input_box_small:{
        backgroundColor:'white',
        borderRadius: 20,
        margin: 10,
        marginLeft:0,
        borderWidth:2,
        borderColor: 'black',
        width:'25%', 
        
    },
    input_box_medium:{
        backgroundColor:'white',
        borderRadius: 20,
        margin: 10,
        marginLeft:0,
        borderWidth:2,
        borderColor: 'black',
        width:'40%', 
        
    },
    
    input_txt:{
        fontWeight:'bold',
        color:'black',
        fontSize:20,
   
    }, 
    or_txt:{
        color:'black',
        width:20,
        textAlign:'center'
    },  
})  
       
export default ForgetPwd1;