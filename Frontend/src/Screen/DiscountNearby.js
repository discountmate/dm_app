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
    TextInput
} from 'react-native';
import { filter } from "lodash";

//svg
import Classification from '../assets/images/Classification.svg'
import Filter from '../assets/images/filter.svg'

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

    const getItem = async() => {
        await axios.get("http://localhost:3000/item")
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
                <Text>Product Name: {item.name}</Text>
                <Text>Price: {item.price}</Text>
            </TouchableOpacity>
       
      );

    const search = (text) => {
     
       if (text) {
           const filteredData = itemList.filter(function (item){
               const itemData = item.name ?
               item.name.toUpperCase()
               :''.toUpperCase();
               const textData = text.toUpperCase();
               return itemData.indexOf(textData) > -1;
           });
           setFilteredItemList(filteredData)
       } else {
           setFilteredItemList(itemList);
       }

      

    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView 
            showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.header}>Nearby Offerts</Text>
                    <View style={styles.Navbar}>
                        <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.tab}>
                            <TouchableOpacity onPress={()=>setclickedTab('Food')}>
                                <Text style={clickedTab == 'Food' ? styles.activeTab : styles.inactiveTab}>
                                    Food/Drink
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Elect')}>
                                <Text style={clickedTab == 'Elect' ? styles.activeTab: styles.inactiveTab}>
                                    Electronics
                                    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Closing')}>
                                <Text style={clickedTab == 'Closing' ? styles.activeTab: styles.inactiveTab}>
                                    Closing/Shoes
                                    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Closing')}>
                                <Text style={clickedTab == 'Closing' ? styles.activeTab: styles.inactiveTab}>
                                    Closing/Shoes
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
                    placeholder="Searching....."
                    onChangeText={e => search(e)}
                    /> 
                    : null}
                </View>
               
                    <FlatList
                        data={filtereditemList ? filtereditemList : itemList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    /> 
     
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 32,
        justifyContent:"center",
    },

    header:{
        fontSize: 24,
        fontWeight:'bold',
        color:'black',
    },

    Navbar:{
        flexDirection:'row',
        marginTop: 10,
        
    },
    
    func_btn:{
        flexDirection:'row',
        borderLeftWidth: 1,
        zIndex:1,
        paddingLeft:5,
        marginLeft:5

    },

    tab:{
        flexDirection:'row',
 
    },

    activeTab:{
        color:'black',
        fontSize:13,
        
    },

    inactiveTab:{
        fontSize:13,

    },

    item:{
        borderRadius:5,
        marginVertical:5,
        padding:5,
        borderWidth:1
    }
}) 
export default DiscountNearby;