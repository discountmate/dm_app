import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



const Profile = () =>{
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
    return(
    <SafeAreaView>
        <Text style={styles.btn_text}>Profile</Text>


    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  btn:{
      marginTop:20,
      backgroundColor: 'grey',
      borderRadius: 20,
      paddingVertical: 10
      
  },
  btn_text:{
      textAlign:'center',
      fontSize: 20,
  }
}) 
export default Profile ;