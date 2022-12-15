import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import axios from "axios";
import api from '../../core/Service';
import { SelectList } from 'react-native-dropdown-select-list'

const History = () =>{
    const [itemList, setItemList] = useState();
    const [listValue, SetListValue] = useState("");
    const userid = useSelector(state => state.app.userid);

    useEffect(() => {getItem()},[!itemList])

    const getItem = async () => {
        var currentDate = new Date()
        switch (listValue) {
            case '1':
                currentDate.setDate(currentDate.getDate() - 7);
                break;
            case '2':
                currentDate.setDate(currentDate.getDate() - 30);
                break;
            case '3':
                currentDate.setDate(currentDate.getDate() - 180);
                break;
            default:
                return;
        }

        const postobj = { dateVal: currentDate, userid: userid }
        await axios.post(`${api}/item/searchInvoiceHistory`, postobj)
            .then(function (response) {
                if (response) {
                    setItemList(response?.data);
                }
            })
            .catch(function (error) {
                console.warn('ERROR: ' + error);
            })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Image style={styles.image_container} source={{ uri: `${item.IMAGE}` }} />
            <View>
                <View style={{ flexDirection: "row" }}>
                    <Text>Invoice Total: {item.ORDER_TOTAL_PRICE}</Text>
                </View>
                <Text>Invoice Date: {item.ORDER_DTTM}</Text>
                <Text>Shop: {item.STORE_NAME}</Text>
            </View>
        </TouchableOpacity>
    );

    const data = [
        { key: '1', value: 'Past 1 week' },
        { key: '2', value: 'Past 1 month' },
        { key: '3', value: 'Past 3 months' }
    ]

    return (
        <View style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
            <View>
                <SelectList
                    style={styles.DropDownList}
                    setSelected={(val) => SetListValue(val)}
                    data={data}
                    save="key"
                    onSelect={() => getItem()}
                />
                <View style={{ padding: 20 }}>
                    <FlatList
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
    header:{
        fontSize: 24,
        fontWeight:'bold',
        color:'black'
    },
    info: {
        fontSize: 15,
        fontWeight:'bold',
        color:'black'
    },
    btn:{
        marginTop:20,
        backgroundColor: '#C4C4C4',
        paddingVertical: 10
    },
    btn_text:{
        textAlign:'center',
        fontSize: 20
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
    DropDownList: {
        backgroundColor: 'white'
    }
}) 
export default History;