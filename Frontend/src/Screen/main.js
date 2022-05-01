import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/common';

//svg
import RightArrow from '../assets/images/rightarrow.svg';
import Product from '../assets/images/product.svg';
import { ScrollView } from 'react-native-gesture-handler';


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
              <Text style={styles.touch_text}>Discount Nearby</Text>
              <RightArrow />
            </View>  
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor:'grey'}}>
          <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: '10%'}}>
             <Product />
             <Product />
             <Product />
          </ScrollView>
        </View>
        
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.btn_text}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Scan')}>
          <Text style={styles.btn_text}>Take a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={Logout}>
          <Text style={styles.btn_text}>Logout</Text>
        </TouchableOpacity>
      </View>
   
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  btn:{
      marginTop:10,
      backgroundColor: 'grey',
      borderRadius: 20,
      paddingVertical: 10
      
  },
  btn_text:{
      textAlign:'center',
      color:'white',
      fontSize: 20,
  },
  touchContainer:{
    padding:20
  },
  touch:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },
  touch_text:{
    fontSize:24,
    fontWeight:'bold',
    color:'black'
  },

}) 
export default Main;