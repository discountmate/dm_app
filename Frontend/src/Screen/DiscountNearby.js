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
import api from '../core/Service';

//svg
import Classification from '../assets/images/Classification.svg'
import Filter from '../assets/images/filter.svg'
import Productimg from '../assets/images/newIcon.svg'

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
                <Text>Product Name: {item.name}</Text>
                <Text>Category: {item.category}</Text>
                <View style={{flexDirection:"row"}}>
                <Text>Price: {item.price}</Text>
                <Text style={{marginLeft:10}}>Discounted Price: {item.discountprice ? item.discountprice : 'No Discount'}</Text>
                </View>
                <Text>Shop: {item.Store}</Text>
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
                            <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Closing')}>
                                <Text style={clickedTab === 'Closing' ? styles.activeTab: styles.inactiveTab}>
                                    Closing/Shoes
                                    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Closing')}>
                                <Text style={clickedTab === 'Closing' ? styles.activeTab: styles.inactiveTab}>
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
        <SafeAreaView style={styles.container}>
            <ScrollView 
            showsVerticalScrollIndicator={true}>
                
               
                    {/* <FlatList
                        data={filtereditemList ? filtereditemList : itemList}
                        renderItem={renderItem}
                        keyExtractor={item => item?.id}
                        showsVerticalScrollIndicator={false}
                    />  */}
                    <View style={{paddingHorizontal:32, marginTop:16}}>
                       <TouchableOpacity style={styles.item}>
                            <View style={styles.imgbox}/>
                            <View style={{marginLeft: 8}}>
                                <Text>Product Name: </Text>
                                <Text>Category: </Text>
                                <View style={{flexDirection:"row"}}>
                                <Text>Price: </Text>
                                <Text style={{marginLeft:10}}>Discounted Price: </Text>
                                </View>
                                <Text>Shop: </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <View style={styles.imgbox}/>
                            <View style={{marginLeft: 8}}>
                                <Text>Product Name: </Text>
                                <Text>Category: </Text>
                                <View style={{flexDirection:"row"}}>
                                <Text>Price: </Text>
                                <Text style={{marginLeft:10}}>Discounted Price: </Text>
                                </View>
                                <Text>Shop: </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <View style={styles.imgbox}/>
                            <View style={{marginLeft: 8}}>
                                <Text>Product Name: </Text>
                                <Text>Category: </Text>
                                <View style={{flexDirection:"row"}}>
                                <Text>Price: </Text>
                                <Text style={{marginLeft:10}}>Discounted Price: </Text>
                                </View>
                                <Text>Shop: </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <View style={styles.imgbox}/>
                            <View style={{marginLeft: 8}}>
                                <Text>Product Name: </Text>
                                <Text>Category: </Text>
                                <View style={{flexDirection:"row"}}>
                                <Text>Price: </Text>
                                <Text style={{marginLeft:10}}>Discounted Price: </Text>
                                </View>
                                <Text>Shop: </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <View style={styles.imgbox}/>
                            <View style={{marginLeft: 8}}>
                                <Text>Product Name: </Text>
                                <Text>Category: </Text>
                                <View style={{flexDirection:"row"}}>
                                <Text>Price: </Text>
                                <Text style={{marginLeft:10}}>Discounted Price: </Text>
                                </View>
                                <Text>Shop: </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <View style={styles.imgbox}/>
                            <View style={{marginLeft: 8}}>
                                <Text>Product Name: </Text>
                                <Text>Category: </Text>
                                <View style={{flexDirection:"row"}}>
                                <Text>Price: </Text>
                                <Text style={{marginLeft:10}}>Discounted Price: </Text>
                                </View>
                                <Text>Shop: </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <View style={styles.imgbox}/>
                            <View style={{marginLeft: 8}}>
                                <Text>Product Name: </Text>
                                <Text>Category: </Text>
                                <View style={{flexDirection:"row"}}>
                                <Text>Price: </Text>
                                <Text style={{marginLeft:10}}>Discounted Price: </Text>
                                </View>
                                <Text>Shop: </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <View style={styles.imgbox}/>
                            <View style={{marginLeft: 8}}>
                                <Text>Product Name: </Text>
                                <Text>Category: </Text>
                                <View style={{flexDirection:"row"}}>
                                <Text>Price: </Text>
                                <Text style={{marginLeft:10}}>Discounted Price: </Text>
                                </View>
                                <Text>Shop: </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                     
                    
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        backgroundColor:'#E5E5E5',
        height:'100%'
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
        fontSize:13,
        
    },

    inactiveTab:{
        fontSize:13,
        color:'grey',

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
    imgbox:{
        width:72,
        height:72,
        backgroundColor:'#6B7DDA',
    },

      
}) 
export default DiscountNearby;