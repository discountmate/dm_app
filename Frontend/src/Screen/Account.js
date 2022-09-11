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

import Icon from '../assets/images/icon.svg';
import Arrow from  '../assets/images/rightarrow.svg'

const Account = () =>{
    const username = useSelector(state => state.app.username)

    return(
    <SafeAreaView style={styles.container}>
        <Icon style={{marginTop:40, marginBottom:32}}/>
        <Text style={styles.header}>Account</Text>
        <Text style={styles.info}>Phone: {username}</Text>
        <Text style={styles.info}>Email: {username}</Text>
        <View style={{marginTop:16}}>
        <TouchableOpacity style={styles.btn} >
            <Text style={styles.btn_text}>Address List</Text>
            <Arrow></Arrow>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Favourite</Text>
            <Arrow></Arrow>
            </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Security</Text>
            <Arrow></Arrow>
          </TouchableOpacity>
          <TouchableOpacity style={styles.log_btn}>
            <Text style={styles.log_text}>Log out</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.edit_btn}>
            <Text style={styles.edit_text}>Edit</Text>
          </TouchableOpacity> 
        </View>
    </SafeAreaView>
    )

}

 const styles = StyleSheet.create({

    header:{
        fontSize: 36,
        fontWeight:'bold',
        color:'black',
    },

    info:{
      fontSize: 17,
        fontWeight:'bold',
        color:'black',

    },

    btn:{
        
        shadowOpacity:0.27,
        shadowColor:'black',
        shadowOffset:{width:0,height:3},
        shadowRadius:4.65,
        elevation: 2,
        padding: 12,
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    log_btn:{
        
      shadowOpacity:0.27,
      shadowColor:'black',
      shadowOffset:{width:0,height:3},
      shadowRadius:4.65,
      elevation: 2,
      padding: 12,
      marginTop: 16,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      bottom: -100, 
      backgroundColor: '#C4C4C4'
    },
    edit_btn:{
        

    },
    btn_text:{
        fontSize: 17.5,
        color: "#333333"
    },
    log_text:{
      fontSize: 15,
      textAlign: "center",
      color: "black"
    },
    edit_text:{
      fontSize: 17,
      textAlign: "center",
      color: "#333333",
      textDecorationLine: 'underline'
    },

}) 
export default Account;