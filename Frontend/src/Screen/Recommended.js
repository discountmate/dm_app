import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import {View,Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image} from 'react-native';
import api from '../core/Service';

import RightArrow from '../assets/images/rightarrow.svg';

const Recommended = () => {
    const navigation = useNavigation();
    const userid = useSelector(state => state.app.userid);
    const [itemList, setItemList] = useState();

    useEffect(() => { getItem() }, [])

    const getItem = async () => {
        const params = { userid: userid };
        await axios.post(`${api}/item/recommended`, params)
            .then(function (response) {
                if (response) {
                    setItemList(response?.data)
                }
            })
            .catch(function (error) {
                console.warn('Get /item/recommended failed.')
            })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => {
            navigation.navigate('ItemInfo', {
                name: item.ITEM_NAME,
                image: item.IMAGE,
                price: item.IP_FOUR_WK_HIGHEST_PRICE,
                discount: item.IP_ITEM_BASE_PRICE,
                percent: item.IP_ITEM_DISCOUNT_PCT,
                catagory: item.CAT_NAME,
                company: item.COM_NAME,
                description: item.ITEM_DESC
            })
        }}>
            <Image style={styles.image_container} source={{ uri: `${item.IMAGE}` }} />
            <View style={{ width: '100%' }}>
                <Text style={{ fontWeight: 'bold', width: '80%'}}>{item.ITEM_NAME}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text>Price: </Text>
                    <Text style={{ textDecorationLine: "line-through" }}>${item.IP_FOUR_WK_HIGHEST_PRICE}</Text>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'green' }}>${item.IP_ITEM_BASE_PRICE}</Text>
                    <Text style={{ marginLeft: 5, color: 'red' }}>SAVE {(item.IP_ITEM_DISCOUNT_PCT * 100).toFixed(0)}%</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 5 }}>Category: {item.CAT_NAME ? item.CAT_NAME : "NO CATEGORY"}</Text>
                    <Text style={{ marginLeft: 5 }}>Shop: {item.COM_NAME}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.touchContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <View style={styles.touch} >
                            <Text style={styles.touch_text}>Main</Text>
                            <RightArrow />
                        </View>
                    </TouchableOpacity>
                </View>
                <View showsVerticalScrollIndicator={true}>
                    <View style={{ padding: 20 }}>
                        <FlatList
                            data={itemList}
                            renderItem={renderItem}
                            keyExtractor={item => item?.ITEM_ID}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        height: '95%'
    },
    touchContainer: { paddingTop: 32 },
    touch: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    touch_text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#555555'
    },
    item: {
        marginVertical: 5,
        padding: 5,
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        shadowOpacity: 0.27,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 4.65,
        elevation: 3,
        backgroundColor: 'white'
    },
    image_container: {
        width: 72,
        height: 72,
        backgroundColor: '#6B7DDA',
        borderRadius: 4,
        marginRight: 5
    }
})
export default Recommended;