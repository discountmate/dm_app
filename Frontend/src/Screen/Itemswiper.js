import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import api from '../core/Service';
import axios from "axios";

import Avo from '../assets/images/test/avo.jpeg'
import Milk from '../assets/images/test/milk.jpeg'
import cornfla from '../assets/images/test/cornfla.jpeg'
import Cheesepopcorn from '../assets/images/test/popcorn.jpeg'
import GFpopcorn from '../assets/images/test/GFpopcorn.jpeg'


const ItemPhoto = [
  {
     
      image:Avo,
      context:'Almost pear shaped, with a green to black shiny skin and a delicate yellow flesh with a green outer hue.'
  },
  {
      image: Milk,
      context:'Complete Dairy brings you a fresh, all natural milk, 70% higher in protein and 25% lower in lactose'

  },
  {
      image: cornfla,
      context:'Kelloggs Corn Flakes with fresh milk is the perfect breakfast cereal to start your day.'

  },
  {
      image: Cheesepopcorn,
      context:'Creating fluffy and crunchy popcorn, to which we add the perfect amount of natural cheddar cheese seasoning.'

  },
  {
      image: GFpopcorn,
      context:'Creating fluffy & crunchy popcorn, to which we sea salt for an irresistible combination.'

  },
 
]



const Itemswiper = () => {
  const [activeSlide, setactiveSlide] = useState(0)
  const[itemList, setItemList] = useState();
  const[filterlist, setfilterlist] = useState();

    useEffect(() => {
      getItem()
  },[!itemList])

  useEffect(() => {
      console.log(itemList)
  },[itemList])


  
    const getItem = async () => {
      // /item/recommended`
      await axios.get(`${api}/item`)
      .then(function (response){
          if (response){
              setItemList(response?.data)
              setfilterlist(itemList.slice(0,5))
              
          }
      })
      .catch(function (error){
          console.warn('Get data failed, please reopen the app')
      })
      
     }

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.imgbox}>
         <Image source={ItemPhoto[filterlist.indexOf(item)].image} />
          </View>
        
        <View style={{padding:16, marginTop:10}}>
          <Text style={styles.product_name}>{item.name}</Text>
            <Text style={styles.btn_text}>
              {ItemPhoto[filterlist.indexOf(item)].context}
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
        itemHeight={400}
        sliderHeight={800}
        slideStyle={{bottom:"45%"}}
        data={filterlist}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem = {(index) => setactiveSlide(index)}
        />
        </View>


        <View style= {{top:'50%'}}>
        <Pagination
        vertical={true}
        dotsLength={5}
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