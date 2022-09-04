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
import Carousel, { Pagination } from 'react-native-snap-carousel';

const carouselItem = [
  {
      title:"Item 1",
      text: "This is text area for Item 1",
  },
  {
      title:"Item 2",
      text: "This is text area for Item 2",
  },
  {
      title:"Item 3",
      text: "This is text area for Item 3",
  },
  {
      title:"Item 4",
      text: "This is text area for Item 4",
  },
  {
      title:"Item 5",
      text: "This is text area for Item 5",
  },
]


const Itemswiper = () => {

  const renderItem = ({item}) => {
    return (
      <View style={{borderWidth:0}}>
        <View style={styles.imgbox}/>
        <View style={{padding:16}}>
          <Text style={styles.product_name}>{item.title}</Text>
            <Text style={styles.btn_text}>
              Rearade nibälingar at, 
              megahemåt för att krot och 
              anasat räniplagon. 
            </Text>
        </View>
      </View>

    )
  }

  const pagination = () => {
    return (
      <Pagination
      dotsLength={5}
      activeDotIndex={activeSlide}
      containerStyle={{backgroundColor:'red'}}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'white'

      }}

      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
      />
    )
  }
 
    return(
      <SafeAreaView>
        {pagination}
        <View style={{}}>
        <Carousel
        vertical={true}
        itemHeight={350}
        sliderHeight={800}
        slideStyle={{bottom:"60%"}}
        data={carouselItem}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        />
        </View>
        
      </SafeAreaView>
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
        fontSize: 20,
    },

    imgbox: {
        width:240,
        height:240,
        borderRadius:8,
        backgroundColor:'#6B7DDA'
    }


}) 
export default Itemswiper;