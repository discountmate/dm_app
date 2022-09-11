import React, { useEffect, useState } from 'react';
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
  const [activeSlide, setactiveSlide] = useState(0)

  useEffect(()=>{
    console.log(activeSlide)
  },[activeSlide])

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
 
    return(
      <SafeAreaView>
        <View style={{flexDirection:'row'}}>
        <View style= {{width:250}}>
        <Carousel
        vertical={true}
        itemHeight={350}
        sliderHeight={800}
        slideStyle={{bottom:"60%"}}
        data={carouselItem}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem = {(index) => setactiveSlide(index)}
        />
        </View>
       

        <View style= {{top:'50%'}}>
        <Pagination
        vertical={true}
        dotsLength={carouselItem.length}
        activeDotIndex={activeSlide}
        dotColor='#4F44D0'
        dotStyle={{width:16, height:16, borderRadius:15,marginTop:8}}
        inactiveDotColor='black'
       
        />
        </View>
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