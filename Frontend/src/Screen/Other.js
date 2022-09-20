import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Arrow from '../assets/images/rightarrow.svg'

const Other = () =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
    <SafeAreaView style={{}}>
              
        <View>
        <View style={styles.mode_btn}>
          <TouchableOpacity disabled={true}  >
            <Text style={styles.btn_text}>Dark Mode</Text>
          </TouchableOpacity>
          <Switch style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        
        </View>
       
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Notifications</Text>
            <Arrow/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.btn_text}>Clear History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>About</Text>
          </TouchableOpacity>


        </View>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
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
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowOpacity:0.27,
        shadowColor:'black',
        shadowOffset:{width:0,height:3},
        shadowRadius:4.65,
        
    },
    mode_btn:{
      marginTop:20,
      padding:12,
      backgroundColor: '#FFFFFF',
      paddingVertical: 10,
      shadowOpacity:0.27,
        shadowColor:'black',
        shadowOffset:{width:0,height:3},
        shadowRadius:4.65,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between'
      
  },
    btn_text:{
        textAlign:'left',
        fontSize: 17,
        color: "#333333",
    },
    switch:{
      // alignSelf: 'flex-end',
    }
}) 
export default Other;