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


const ForgetPwd = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View>
        
    
                <Text style={styles.context_txt}> 
                To reset your password please verify your phone
                number and date of birth
                </Text>
    
                <View style={{marginTop:23}}>
                    <Text style={{marginLeft:5, color:'black', fontWeight:'bold'}}>Phone Number</Text>
                        <View style={styles.input_box}>
                            
                            <TextInput />
                        </View>
                </View>
                <View style={{marginTop:32}}>
                    <Text style={{marginLeft:5, color:'black', fontWeight:'bold'}}>Date of birth (dd/mm/yyy)</Text>
                    <View style={{flexDirection:'row'}}>
                     <View style={[styles.input_box, {width: 56}]}>
                            <TextInput />
                        </View>
                        <View style={[styles.input_box, {width: 56}]}>
                            <TextInput />
                        </View>
                        <View style={[styles.input_box, {width: 96}]}>
                            <TextInput />
                        </View>
                    </View>
                </View>
                <Text style={[styles.context_txt,{marginTop:18}]}>You must be over the age of 16 to create an account</Text>
            </View>
            
    
            <View style={{paddingHorizontal:30, marginTop:90}}>
                <TouchableOpacity style={styles.btn} onPress = {() => navigation.push('ForgetPwd1')}>
                    <Text style={styles.btn_text}>Continue</Text>
                </TouchableOpacity>
            </View> 
        </SafeAreaView>
    )
    
}
    
    const styles = StyleSheet.create({
        container:{
            justifyContent:"center",
            paddingHorizontal:40,
            paddingVertical:32
        },
        
        title:{
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
            color:'#555555'
        },
    
        input_box:{
            borderWidth:2,
            borderRadius:50,
            marginTop:8,
            marginRight:4,
            height:40,
            justifyContent:'center',
            paddingHorizontal:10
            
        },
    
        btn:{
            backgroundColor: '#4F44D0',
            borderRadius: 50,
            paddingVertical: 21,
            
            
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
export default ForgetPwd;