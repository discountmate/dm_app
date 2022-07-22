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


const ForgetPwd2 = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.title}>
                    <Text style={styles.title_txt}>
                       Forgot Password
                    </Text>
                    
                </View>
    
                <Text style={styles.header_txt}> New Password</Text>
                <Text style={styles.context_txt}> Please submit password</Text>
    
                <View style={{marginTop:23}}>
                    <Text style={{marginLeft:5, color:'black'}}>Password</Text>
                        <View style={styles.input_box}>
                            <TextInput style={{color:'white'}}/>
                        </View>

                    <Text style={{marginLeft:5, color:'black', marginTop:20}}>Confirm Password</Text>
                        <View style={styles.input_box}>
                            <TextInput style={{color:'white'}}/>
                        </View>
                </View>
            </View>
    
            <View style={{padding: 75, marginTop:20}}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Login')}>
                    <Text style={styles.btn_text}>Next</Text>
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
export default ForgetPwd2;