
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
        <SafeAreaView> 
            <View style={styles.container}>
                <Text style={styles.context_txt_msg}>Please submit password</Text> 
                
                <Text style={[styles.input_header,{marginTop:56}]}>Password</Text>
                        <View style={styles.input_box}>
                            <TextInput />
                        </View> 
                    
                    <Text style={styles.input_header}>Confirm Password</Text>
                        <View style={styles.input_box}>
                            <TextInput />
                        </View> 
                    
                    
                    <TouchableOpacity style={styles.btn_continue} onPress={() => navigation.replace('Login')}>
                        <Text style={styles.btn_text}>Continue</Text>
                    </TouchableOpacity>
 
            </View>

            <View style={styles.orline}>
                <View style={styles.line}/>
                <Text style={styles.or}>or</Text>
                <View style={styles.line}/>
            </View>
                    
            <Text style={styles.context_txt_msg2}> Already a member</Text>  
                <TouchableOpacity onPress={() => navigation.replace('Login')}>  
                    <Text style={styles.context_txt_msg3}> Sign in </Text>
                    <View style={styles.signin_line}/>
                </TouchableOpacity>    
        </SafeAreaView>
    )
    
}
    
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:48
        },

    input_box: {
        borderWidth:1,
        borderRadius:50,
        height:40,
        marginTop:8,
        justifyContent:'center',
        paddingHorizontal:10
    },

    input_header:{
        fontWeight:'700',
        fontSize:15,
        marginTop:16,
        paddingHorizontal:10,
    },

    context_txt_msg:{
        fontWeight:'400',
        fontSize:13,
        marginTop:56
    },

    btn_continue:{
        backgroundColor:'#4F44D0',
        borderRadius:50,
        height:62,
        justifyContent:'center',
        alignItems:'center',
        marginTop:145
    },

    btn_text:{
        color:'white',
        fontSize:16,
        fontWeight:'700'
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
        marginTop:82,
        justifyContent:'space-between'
    },

    context_txt_msg2:{
        textAlign:'center',
        marginTop:56,
        fontSize:15,
        fontWeight:'700'
    },

    context_txt_msg3:{
        textAlign:'center',
        marginTop:30,
        fontSize:15,
        fontWeight:'700',
    },
    signin_line:{
        borderBottomWidth:2,
        width:50,
        left:2,
        alignSelf:'center'
    }
})  
       
export default ForgetPwd2;