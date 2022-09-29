import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from '../../assets/images/manIcon.png';
import Arrow from  '../../assets/images/rightarrow.svg'

const Account = () =>{
    const username = useSelector(state => state.app.username)
    const navigation = useNavigation();


    return(
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Image style={styles.icon} source={Icon}/>
        <TouchableOpacity style={styles.edit_btn}>
            <Text style={styles.edit_text}>Edit</Text>
          </TouchableOpacity> 
      </View>
       

        <Text style={styles.header}>Ida Marinsson</Text>
        <Text style={styles.info}>Phone: 545156321</Text>
        <Text style={styles.info}>Email: discountMate@gmail.com</Text>

        <View style={{}}>
          
          <View style={styles.btn}>
            <TouchableOpacity>
              <Text style={styles.btn_text}>Address List</Text>
            </TouchableOpacity>
            <Arrow/>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity >
              <Text style={styles.btn_text}>Favourite</Text>
            </TouchableOpacity>
            <Arrow></Arrow>
          </View>
       
         
          <View style={styles.btn}>
            <TouchableOpacity >
              <Text style={styles.btn_text}>Security</Text>
            </TouchableOpacity>
            <Arrow></Arrow>
          </View>

          <TouchableOpacity style={styles.log_btn} onPress={() => navigation.replace('Login')}>
            <Text style={styles.log_text}>Log out</Text>
          </TouchableOpacity>
          
        </View>
    </SafeAreaView>
    )

}

 const styles = StyleSheet.create({
    container:{
      paddingHorizontal:32

    },
    header:{
      fontSize: 36,
      fontWeight:'bold',
      color:'black',
    },

    info:{
      fontSize: 17,
      marginTop:8
    },

    btn:{
      shadowOpacity:0.27,
      shadowColor:'black',
      shadowOffset:{width:0,height:3},
      // shadowRadius:4.65,
      borderRadius:4,
      borderWidth:1,
      padding: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop:16
    },

    log_btn:{
      shadowOpacity:0.27,
      shadowColor:'black',
      shadowOffset:{width:0,height:3},
      shadowRadius:4.65,
      elevation: 2,
      padding: 12,
      marginTop: 85,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#C4C4C4'
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
      textDecorationLine: 'underline',
      fontWeight:'bold'
    },

    icon:{
      width:120,
      height:120,
      borderRadius:60,
      borderWidth:1
    }

}) 
export default Account;