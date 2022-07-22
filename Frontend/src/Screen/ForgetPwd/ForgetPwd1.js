import { useNavigation } from "@react-navigation/native";
import React from "react";
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
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.title}>
                    <Text style={styles.title_txt}>
                       Forgot Password
                    </Text>
                </View>

                <Email style={{marginTop:40}} />
    
                <Text style={styles.header_txt}> Password reset link sent </Text>
                <Text style={styles.context_txt}> 
                 We have sent an email to {'\n'}
                 _____________ click the link to rest your password
                </Text>
    
     
            </View>
    
            <View style={{padding: 75, marginTop:20}}>
                <TouchableOpacity style={styles.btn} onPress = {() => navigation.push('ForgetPwd2')}>
                    <Text style={styles.btn_text}>Resend email</Text>
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
            color:'black',
            marginTop:18
        },
    
        context_txt:{
            fontSize:15,
            marginTop:31,
            color:'black'
        },
    
        input_box:{
            backgroundColor:'black'
        },
    
        btn:{
            marginTop:20,
            backgroundColor: 'black',
            borderRadius: 25,
            paddingVertical: 15
            
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
            alignSelf:'center'
        },
    
        signin_txt:{
            color:'black',
            fontSize:16,
            fontWeight:'bold'
        }
    }) 
export default ForgetPwd1;