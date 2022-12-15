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

import History from './Account/History.js'
import Account from './Account/Account.js'
import Other from './Account/Other.js'

const Setting = () =>{
    const navigation = useNavigation();
    const username = useSelector(state => state.app.username)
    const [activebtn, Isactivebtn] = useState(0)

    return(
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection:"row", paddingHorizontal: 32, paddingVertical:17}}>
          <TouchableOpacity style={{marginRight:16}} onPress={() => {Isactivebtn(0)}}>
            <Text style={{color: activebtn === 0 ? "#4F44D0" : "grey"}}>History</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={{marginRight:16}} onPress={() => {Isactivebtn(1)}}>
              <Text style={{color: activebtn === 1 ? "#4F44D0" : "grey"}}>Account</Text>
              </TouchableOpacity> 
          <TouchableOpacity style={{marginRight:16}} onPress={() => {Isactivebtn(2)}}>
              <Text style={{color: activebtn === 2 ? "#4F44D0" : "grey"}}>Other</Text>
              </TouchableOpacity>
        </View>
              {activebtn === 0 ? <History/> : activebtn === 1? <Account/> : <Other/>}
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        // marginTop: 17,
        // paddingHorizontal: 32,
        // justifyContent:"center",
    },
    header:{
        fontSize: 24,
        fontWeight:'bold',
        color:'black'
    },
    info:{
        fontSize: 15,
        fontWeight:'bold',
        color:'black'
    },
    btn:{
        marginTop:20,
        backgroundColor: '#C4C4C4',
        paddingVertical: 10
        
    },
    btn_text:{
        textAlign:'center',
        fontSize: 20
    },
}) 
export default Setting;