import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    View,
    Text, 
    StyleSheet, 
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    FlatList,
    TextInput,
    Image
} from 'react-native';
import api from '../core/Service';

//svg
import Classification from '../assets/images/Classification.svg'
import Filter from '../assets/images/filter.svg'

import Avo from '../assets/images/test/avo.jpeg'
import Milk from '../assets/images/test/milk.jpeg'
import cornfla from '../assets/images/test/cornfla.jpeg'
import Cheesepopcorn from '../assets/images/test/popcorn.jpeg'
import GFpopcorn from '../assets/images/test/GFpopcorn.jpeg'
import WWcorn from '../assets/images/test/WWpopcorn.jpeg'
import MWcorn from '../assets/images/test/MWpopcorn.jpeg'
import Coco from '../assets/images/test/coco.jpeg'
import blackberries from '../assets/images/test/blackberries.jpeg'
import blackgrapes from '../assets/images/test/blackgrapes.jpeg'
import strawberries from '../assets/images/test/strawberries.jpeg'
import pears from '../assets/images/test/pears.jpeg'

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
  {
      image: MWcorn
  },
  {
      image: Coco
  },
  {
      image: blackberries
  },
  {
      image: blackgrapes
  },
  {
      image: strawberries
  },
  {
      image: pears
  },
]

const DiscountNearby = () => {
    const[clickedTab, setclickedTab] = useState('Food');
    const[itemList, setItemList] = useState();
    const[filtereditemList, setFilteredItemList] = useState();
    const[searching, setSearching] = useState(false);

    useEffect(() => {
        getItem()
    },[])

    useEffect(() => {
        console.log(itemList)
    },[itemList])

    const getItem = async () => {
        await axios.get(`${api}/item`)
        .then(function (response){
            if (response){
                setItemList(response?.data)
            }
        })
        .catch(function (error){
            console.warn('Get data failed, please reopen the app')
        })
        
    }

    const renderItem = ({item}) => (
        
            <TouchableOpacity style={styles.item}>
                <Image style={styles.image_container} source={ItemPhoto[itemList.indexOf(item)].image} />
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

    const search = (text) => {
     
       if (text) {
           const filteredData = itemList.filter(function (item){
               const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
               const textData = text.toUpperCase();
               return itemData.indexOf(textData) > -1;
           });
           setFilteredItemList(filteredData)
       } else {
           setFilteredItemList(itemList);
       }
    }

    return(
        <>
         <View>
                <View style={styles.Navbar}>
                    <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.tab}>
                        <TouchableOpacity onPress={()=>setclickedTab('Food')}>
                            <Text style={clickedTab === 'Food' ? styles.activeTab : styles.inactiveTab}>
                                Food/Drink
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Elect')}>
                            <Text style={clickedTab === 'Elect' ? styles.activeTab: styles.inactiveTab}>
                                Electronics
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Health')}>
                            <Text style={clickedTab === 'Health' ? styles.activeTab: styles.inactiveTab}>
                                Health/Beauty
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Clothing')}>
                            <Text style={clickedTab === 'Clothing' ? styles.activeTab: styles.inactiveTab}>
                                Clothing/Shoes
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => setclickedTab('House')}>
                            <Text style={clickedTab === 'House' ? styles.activeTab : styles.inactiveTab}>
                                Household
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => setclickedTab('Pets')}>
                            <Text style={clickedTab === 'Pets' ? styles.activeTab : styles.inactiveTab}>
                                Pets
                            </Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
                    <View style={styles.func_btn}>
                        <TouchableOpacity>
                            <Classification style={{color:'red'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setSearching(!searching)}}>
                            <Filter />
                        </TouchableOpacity>
                    </View>
                </View> 
                {searching ? <TextInput 
                style={{padding:10}}
                placeholder="Searching....."
                placeholderTextColor={'black'}
                onChangeText={e => search(e)}
                /> 
                : null}
            </View>
        <SafeAreaView style={styles.container} >
            <View
            showsVerticalScrollIndicator={true}>
                
                <View style={{padding:20}}>
                    <FlatList
                        data={filtereditemList ? filtereditemList : itemList}
                        renderItem={renderItem}
                        keyExtractor={item => item?.id}
                        showsVerticalScrollIndicator={false}
                    /> 
                </View>
              
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start',
        backgroundColor:'#E5E5E5',
        height:'100%',
    },

    listcontainer:{
        paddingHorizontal:32,
        marginTop:16
    },

    header:{
        fontSize: 24,
        fontWeight:'bold',
        color:'black',
    },

    Navbar:{
        flexDirection:'row',
        marginTop: 10,
        backgroundColor:'white',
        paddingHorizontal: 32,
        paddingVertical:10
        
    },
    
    func_btn:{
        flexDirection:'row',
        borderLeftWidth: 1,
        zIndex:1,
        paddingLeft:5,
        marginLeft:5,
        borderLeftColor:'grey'

    },

    tab:{
        flexDirection:'row',
 
    },

    activeTab:{
        color:'#4F44D0',
        fontSize: 13,
        fontWeight: 'bold'
    },
    inactiveTab:{
        fontSize:13,
        color: 'grey'
    },

    item:{
        marginVertical:5,
        padding:5,
        alignItems:'center',
        borderRadius:4,
        flexDirection:'row',
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
export default DiscountNearby;