import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import axios from "axios";
import api from '../../core/Service';


import Avo from '../../assets/images/test/avo.jpeg'
import Milk from '../../assets/images/test/milk.jpeg'
import cornfla from '../../assets/images/test/cornfla.jpeg'
import Cheesepopcorn from '../../assets/images/test/popcorn.jpeg'
import GFpopcorn from '../../assets/images/test/GFpopcorn.jpeg'
import WWcorn from '../../assets/images/test/WWpopcorn.jpeg'


const ItemPhoto = [
  {
     
      image:Avo
  },
  {
      image: Milk
  },
  {
      image: cornfla
  },
  {
      image: Cheesepopcorn
  },
  {
      image: GFpopcorn
  },
  {
      image: WWcorn
  },
]


const History = () =>{
    const[itemList, setItemList] = useState();
    const[filterlist, setfilterlist] = useState();

    useEffect(() => {
        getItem()
    },[!itemList])
    useEffect(() => {
        console.log(itemList)
    },[itemList])

    const getItem = async () => {
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

    const renderItem = ({item}) => (
        
            <TouchableOpacity style={styles.item}>
                <Image style={styles.image_container} source={ItemPhoto[filterlist.indexOf(item)].image} />
                <View>
                    <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                    <Text>Category: {item.category ? item.category : "Food/Drink"}</Text>
                    <View style={{flexDirection:"row"}}>
                    <Text>Price: {item.price}</Text>
                    <Text style={{marginLeft:10}}>Discounted Price: {item.discountprice ? item.discountprice : (item.price * 0.8).toFixed(2)}</Text>
                    </View>
                    <Text>Shop: {item.Store}</Text>
                </View>
               
            </TouchableOpacity>
       
      );

    return(
        <View style={{backgroundColor:'#E5E5E5', height:'100%'}}>
            <View>
            <View style={{padding:20}}>
                    <FlatList
                        data={filterlist}
                        renderItem={renderItem}
                        keyExtractor={item => item?.id}
                        showsVerticalScrollIndicator={false}
                    /> 
                </View>
          
                
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        marginTop: 17,
        justifyContent:"center",
    },

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
        backgroundColor: '#C4C4C4',
        paddingVertical: 10
        
    },
    btn_text:{
        textAlign:'center',
        fontSize: 20,
    },
    item:{
        marginVertical:5,
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:4,
        shadowOpacity:0.27,
        shadowColor:'black',
        shadowOffset:{width:0,height:3},
        shadowRadius:4.65,
        elevation: 3,
        backgroundColor:'white'
   
    },
   
    image_container:{
        width:72,
        height:72,
        backgroundColor:'#6B7DDA',
        borderRadius:4,
        marginRight:5
    },
}) 
export default History;