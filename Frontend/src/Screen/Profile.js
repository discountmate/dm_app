import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/common';

//svg
import Cart from '../assets/images/cart.svg' 



const Profile = () =>{
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const Logout = async() => {
    await dispatch(setAuth(false))
    navigation.replace('Login')
  }
    return(
    <SafeAreaView>
        <Text style={styles.header}>Welcome to Dashboard</Text>

        <View style={{paddingHorizontal:10, paddingVertical:20}}>
          <TouchableOpacity style={styles.cart_btn}>
            <Cart />
            <Text style={{alignSelf:'center'}}>~~~~~~~~~~~~~~~~~~~~~~{'\n'}~~~~~~~~~~~~</Text>
          </TouchableOpacity>
        </View>

       

        <View>
          <TouchableOpacity style={styles.btn} onPress = {()=> navigation.push('Setting')}>
            <Text style={styles.btn_text}>My account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress = {()=> navigation.push('DiscountNearby')}>
            <Text style={styles.btn_text}>Recommended Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress = {()=> navigation.push('Scan')}>
            <Text style={styles.btn_text}>Scan Receipts</Text>
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity style={styles.btn} onPress={Logout}>
          <Text style={styles.btn_text}>Logout</Text>
        </TouchableOpacity>


    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  btn:{
      marginTop:20,
      backgroundColor: '#C4C4C4',
      paddingVertical: 10
      
  },
  btn_text:{
      textAlign:'center',
      fontSize: 20,
  },
  header:{
    backgroundColor:'#C4C4C4',
    textAlign:'center',
    fontSize: 20,
    paddingVertical:10,
    color:'black',
    fontWeight:'bold'

  },
  cart_btn:{
    flexDirection:'row',
    shadowOpacity:0.27,
    shadowColor:'black',
    shadowOffset:{width:0,height:3},
    shadowRadius:4.65,
    elevation: 3,
    justifyContent:'center'
  }
}) 
export default Profile ;