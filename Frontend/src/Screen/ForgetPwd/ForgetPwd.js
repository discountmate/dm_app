import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from "react-native";


const ForgetPwd = () => {
    const navigation = useNavigation()
    const [phone, SetUserPhone] = useState("");
    const [dob_d, SetDoBD] = useState("");
    const [dob_m, SetDoBM] = useState("");
    const [dob_y, SetDoBY] = useState("");
    return (
        <SafeAreaView style={styles.container}>
           
                 
                <Text style={styles.context_txt_msg1}> 
                To reset your password please verify your phone {'\n'}
                number and date of birth
                </Text>  
               
                    <Text style={styles.header_txt_phone}>Phone Number</Text>
                        <View style={styles.input_box_phone}> 
                            <TextInput style={styles.input_txt_phone}
                               onChangeText={SetUserPhone}>
                            </TextInput>
                        </View>          

                
                    <Text style={styles.header_txt_DoB}>Date of Birth (dd/mm/yyyy)</Text>                     
                        
                        
                    <TextInput style={styles.input_box_D}                            
                    onChangeText={SetDoBD}>
                    </TextInput>
                    
                    
                    <TextInput style={styles.input_box_M}
                    onChangeText={SetDoBM}>
                    </TextInput> 
                    
                    <TextInput style={styles.input_box_Y}
                    onChangeText={SetDoBY}>
                    </TextInput>
                       
             
                <Text style={styles.context_txt_msg2}> You must be over the age of 16 to create an account.   </Text>   
            
                <TouchableOpacity style={styles.btn_continue} onPress = {() => navigation.push('ForgetPwd1')}>     
                <Text style={styles.btn_text}>Continue</Text>                   
                              
                </TouchableOpacity>
             
        </SafeAreaView>
    )
    
}
    
    const styles = StyleSheet.create({
        container:{
            justifyContent:"center",
        },
        
        message:{  
           margin: 10, 

        },
        context_txt_msg1:{
            fontSize:13,
            color:'#555555',
            textAlign: "left",
            lineHeight: 16,
            position: 'absolute',
            left: 48,
            top: 112,
            width:300,
            height:40,
            fontWeight: '400'
            
        },
        context_txt_msg2:{
            fontSize:15,
            color:'#555555',
            textAlign: "left",
            lineHeight: 13,
            position: 'absolute',
            left: 48,
            top: 397,
            width:292,
            height:13,
            fontWeight: '400'
            
        },
        header_txt_phone:{
            fontSize:17, 
            color:'black',
            position: 'absolute',
            left: 48,
            top: 193,
            width:205,
            height:32,
            lineHeight: 36,
            fontWeight: '700'

        },
        input_box_phone:{
            backgroundColor:'white',
            borderRadius: 50,            
            borderWidth:2,
            borderColor: 'black',
            position: 'absolute',
            left: 40,
            top: 233,
            width:315,
            height:40,
        },
        input_txt_phone:{ 
            color:'black',
            fontSize:20,
            fontWeight: '700'
        },
        header_txt_DoB:{
            fontSize:17,
            fontWeight:'bold',
            color:'black',
            position: 'absolute',
            left: 48,
            top: 305,
            width:218,
            height:36,
            lineHeight: 36,
        },
        input_box_D:{ 
            borderColor: '#333333', 
            position: 'absolute',
            left: 40,
            top: 347,
            width:56,
            height:32,
            borderWidth: 2,
            borderRadius: 40,
        },
        input_box_M:{ 
            borderColor: '#333333', 
            position: 'absolute',
            left: 100,
            top: 347,
            width:56,
            height:32,
            borderWidth: 2,
            borderRadius: 40, 
        },
        input_box_Y:{ 
            borderColor: '#333333', 
            position: 'absolute',
            left: 160,
            top: 347,
            width:96,
            height:32,
            borderWidth: 2,
            borderRadius: 40,  
        },      
              
        input_txt:{
            fontWeight:'bold',
            color:'black',
            fontSize:20,       
        },
        btn_continue:{ 
            backgroundColor:'#4F44D0',
            position: 'absolute',  
            left: 64, 
            top: 500, 
            borderRadius: 50, 
            width:262,
            height:62,
          
            
        },
        btn_view:{
            position: 'absolute',
            left: '0%',
            right: '0%',
            top: '0%',
            bottom: '0%',
            backgroundColor:'#4F$4D0',
            borderRadius:50,
            color:'red'
            
        },
        btn_text:{
            color:'white',
            fontSize: 20,
            position: 'absolute',
            left: '36.18%',
            right: '36.34%',
            top: '30.36%',
            bottom: '34.16%',
            fontSize: 16,
            lineHeight: 22,
            textAlign:'center',
            fontWeight: '700'
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
        btn:{
            marginEnd: 0,
            backgroundColor: 'blue',
            borderRadius: 20,
            padding: 20,
            
        },
       
        
        or_txt:{
            color:'black',
            width:20,
            textAlign:'center'
        },  
    }) 
export default ForgetPwd;