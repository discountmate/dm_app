import { useNavigation } from "@react-navigation/native";
import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Linking
} from "react-native";


const ForgetPwd2 = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}> 
            
           <Text style={styles.context_txt_msg1}> Please submit password</Text> 
           
            <Text style={styles.header_txt_password}>Password</Text>
                    <View style={styles.input_box_password}>
                        <TextInput style={{color:'white'}}/>
                    </View> 
                
                <Text style={styles.header_txt_confirm_password}>Confirm Password</Text>
                    <View style={styles.input_box_confirm_password}>
                        <TextInput style={{color:'white'}}/>
                    </View> 
                
               
                <TouchableOpacity style={styles.btn_continue} onPress={() => navigation.replace('Login')}>
                    <Text style={styles.btn_text}>Continue</Text>
                </TouchableOpacity>
                 
                 
               
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
        justifyContent:"center",
    },
    
    line_1:{
        position: "absolute",
        top: 500,
        left:0, 
        height:0,
        borderColor: '#171219',
        borderWidth: 1,  
        borderStyle: 'solid',
        width:'46%' 
    }, 
    line_2:{
        position: "absolute",
        top: 500,
        left:215, 
        height:0,
        borderColor: '#171219',
        borderWidth: 1,  
        borderStyle: 'solid',
        width:'46%' 
    }, 
    or_txt:{
        position: "absolute",
        top: 492,
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
        top: 550,
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
        top: 580,
        width:395,
        height:38,    
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"        
    },  
    header_txt_password:{
        fontSize:15,
        lineHeight:18,
        fontWeight:'bold',
        color:'black',
        position: 'absolute',
        left: 48,
        top: 193,
        width:205,
        height:32,
        fontWeight: '700'

    },
    input_box_password:{
        backgroundColor:'white',
        borderRadius: 50,            
        borderWidth:2,
        borderColor: 'black',
        position: 'absolute',
        left: 40,
        top: 222,
        width:315,
        height:40,
    },
    header_txt_confirm_password:{
        fontSize:15,
        lineHeight:18,
        fontWeight:'bold',
        color:'black',
        position: 'absolute',
        left: 48,
        top: 286,
        width:205,
        height:32,
        fontWeight: '700'

    },
    input_box_confirm_password:{
        backgroundColor:'white',
        borderRadius: 50,            
        borderWidth:2,
        borderColor: 'black',
        position: 'absolute',
        left: 40,
        top: 315,
        width:315,
        height:40,
    }, 
      btn_continue:{ 
        backgroundColor:'#4F44D0',
        position: 'absolute',  
        left: 64, 
        top: 400, 
        borderRadius: 50, 
        width:262,
        height:62, 
    }, 
    btn_text:{
        color:'white', 
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
    header_txt_middle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        textAlign: 'center',
        padding: 5
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
    btn:{
        backgroundColor: 'blue',
        borderRadius: 20,
        padding: 20,
        
        
    }, 
   
    signin_txt:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },
    signin_btn:{
        marginTop:55,
        alignSelf:'center'
    },
})  
       
export default ForgetPwd2;