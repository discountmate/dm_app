import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/common';

//svg
import RightArrow from '../assets/images/rightarrow.svg';
import Product from '../assets/images/product.svg';
import Itemswiper from './Itemswiper';



const Main = () =>{
  const auth = useSelector(state => state.app.auth);
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const [image, setImage] = useState('');

  const Logout = async () => {
    await dispatch(setAuth(false))
    navigation.replace('Login')
  }

    return(
    <SafeAreaView>
      <View style={styles.container}>

        <View style={styles.touchContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('DiscountNearby')}>
            <View style={styles.touch} >
              <Text style={styles.touch_text}>Recommended items</Text>
              <RightArrow />
            </View>  
          </TouchableOpacity>
        </View>

        <Itemswiper/>

     
      </View>
   
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  container: {
    paddingLeft:56,
    paddingRight:"5%"

  },
  btn:{
      marginTop:10,
      backgroundColor: 'grey',
      borderRadius: 20,
      paddingVertical: 10
      
  },
  btn_text:{
      textAlign:'center',
      color:'black',
      fontSize: 20,
  },
  touchContainer:{
    paddingTop:32
  },
  touch:{
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center',
  },
  touch_text:{
    fontSize:24,
    fontWeight:'bold',
    color:'#555555'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: 'red',
    paddingVertical:20
  },
 



}) 
export default Main;