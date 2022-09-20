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


const History = () =>{
    const navigation = useNavigation();
    const username = useSelector(state => state.app.username)

    return(
    <SafeAreaView style={styles.container}>
              
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
export default History;