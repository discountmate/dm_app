import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
const {height} = Dimensions.get('screen')


const Itemswiper = () => {
 
    return(
        <View style={{height:'90%', marginTop:20}}>
        <Swiper 
        style={{overflow:'visible'}}
        horizontal={false}
        dotColor='#000000'
        dotStyle={{top:'50%'}}
        activeDot={
          <View 
          style={{
            width:13,
            height:13, 
            backgroundColor:'#4F44D0', 
            borderRadius: 7,
            marginVertical:8,
            top:'50%'
          }}/>
        }
        paginationStyle={{bottom:'50%'}}
        >
         
            <View style={styles.slide}>
              <View style={styles.imgbox}/>
              <View style={{padding:16}}>
                  <Text style={styles.product_name}>Product Name1</Text>
                  <Text style={styles.btn_text}>
                  Rearade nibälingar at, 
                  megahemåt för att krot och 
                  anasat räniplagon. 
                  </Text>
              </View>
            </View>
            <View style={styles.slide}>
              <View style={styles.imgbox}/>
              <View style={{padding:16}}>
                  <Text style={styles.product_name}>Product Name2</Text>
                  <Text style={styles.btn_text}>
                  Rearade nibälingar at, 
                  megahemåt för att krot och 
                  anasat räniplagon. 
                  </Text>
              </View>
            </View> 
            <View style={styles.slide}>
              <View style={styles.imgbox}/>
              <View style={{padding:16}}>
                  <Text style={styles.product_name}>Product Name3</Text>
                  <Text style={styles.btn_text}>
                  Rearade nibälingar at, 
                  megahemåt för att krot och 
                  anasat räniplagon. 
                  </Text>
              </View>
            </View> 
  
          
        
         
          
        </Swiper>
      </View>      
    )

}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'black',
  },
    slide: {
        alignItem: 'center',
      },
    product_name: {
        color:'black',
        fontSize: 15,
    },

    imgbox: {
        width:240,
        height:240,
        borderRadius:8,
        backgroundColor:'#6B7DDA'
    }


}) 
export default Itemswiper;