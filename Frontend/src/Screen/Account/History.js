import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


const History = () =>{

    return(
        <View style={{backgroundColor:'#E5E5E5', height:'100%'}}>
            <ScrollView>
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
    imgbox:{
        width:72,
        height:72,
        backgroundColor:'#6B7DDA',
        borderRadius:4
    },
}) 
export default History;