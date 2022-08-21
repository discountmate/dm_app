import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';


const Setting = () =>{
    const navigation = useNavigation();
    const username = useSelector(state => state.app.username)
   

    return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>My Profile</Text>
        <Text style={styles.info}>username: {username}</Text>
        <View>
        <TouchableOpacity style={styles.btn} onPress = { () => navigation.push('UpdateUserProfile')}>
            <Text style={styles.btn_text}>Update Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress = { () => navigation.push('Reset')}>
            <Text style={styles.btn_text}>Reset Password</Text>
          </TouchableOpacity>


        </View>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        marginTop: 17,
        paddingHorizontal: 32,
        justifyContent:"center",
    },

    header:{
        fontSize: 24,
        fontWeight:'bold',
        color:'black',
    },

    info:{
      fontSize: 15,
        fontWeight:'bold',
        color:'black',
    },

    btn:{
        marginTop:20,
        backgroundColor: '#C4C4C4',
        paddingVertical: 10
        
    },
    btn_text:{
        textAlign:'center',
        fontSize: 20,
    },
}) 
export default Setting;