import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image, FlatList} from 'react-native';
import api from '../core/Service';
import axios from "axios";

const SearchItem = () => {
    const navigation = useNavigation();
    const [itemList, SetItemList] = useState()
    const [itemName, SetItemName] = useState("");

    const getItem = async () => {
        const postobj = { name: itemName }
        await axios.post(`${api}/item/searchFilter`, postobj)
            .then(function (response) {
                if (response) {
                    SetItemList(response?.data);
                }
            })
            .catch(function (error) {
                console.warn("ERROR: " + error);
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
                <Text style={{ fontWeight: 'bold', width: '80%' }}>{item.ITEM_NAME}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text>Price: {item.IP_FOUR_WK_HIGHEST_PRICE}</Text>
                    {item.IP_ITEM_DISCOUNT_PRICE > 0 ? <Text style={{ marginLeft: 10 }}>Discounted Price: {item.IP_ITEM_BASE_PRICE}</Text> : <Text></Text>}
                </View>
                <Text>Category: {item.CAT_NAME ? item.CAT_NAME : "NO CATEGORY"}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => getItem()}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput placeholder='Item name' style={styles.input_box} onChangeText={SetItemName} />
                        <TouchableOpacity style={styles.btn} onPress={() => getItem()}>
                            <Text style={styles.btn_text}>Find</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
                <View style={{ padding: 20 }}>
                    <FlatList
                        initialNumToRender={7}
                        data={itemList}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={true}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 17,
        justifyContent: "center"
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    info: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    btn: {
        backgroundColor: '#4F44D0',
        width: '15%',
        height: 40,
        borderRadius: 50,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0
    },
    btn_text: {
        fontSize: 20,
        color: 'white',
        margin: 5,
        marginLeft: 8
    },
    item: {
        marginVertical: 5,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
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
        marginLeft: 5
    },
    image_Icon: {
        width: 50,
        height: 50,
        backgroundColor: '#6B7DDA',
        borderRadius: 4,
        marginLeft: 50
    },
    input_box: {
        borderWidth: 2,
        borderRadius: 50,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        fontSize: 20,
        height: 40,
        textAlignVertical: 'center',
        width: '80%',
        paddingHorizontal: 10,
        marginLeft: 5
    }
}) 

export default SearchItem;