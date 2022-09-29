import { useNavigation } from "@react-navigation/native";
import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    FlatList
} from "react-native";

const foodlist = [
    {
        title:"Misugt bjästa",
        price:"12.00"
    },
    {
        title:"Tina hbt",
        price:"12.00"
    },
    {
        title:"Fygodade krorar",
        price:"12.00"
    },
    {
        title:"Reföde ekotiv vanade",
        price:"12.00"
    },
    {
        title:"Laräras apire tedoninat",
        price:"12.00"
    },
    {
        title:"Gålig diassade, okåheten",
        price:"12.00"
    },
    {
        title:"Andrafiering klimatstrejk",
        price:"12.00"
    },
    {
        title:"Fanat nidat",
        price:"12.00"
    },
    {
        title:"Hexas ses syliga",
        price:"12.00"
    },
]

const elelist = [
    {
        title:"Vibed soteda",
        price:"12.00"
    },
    {
        title:"Fasamma gugt jojusam",
        price:"12.00"
    },
]


const ReceiptResult = () => {
    const navigation = useNavigation()

    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text>{item.title}</Text>
                <Text>${item.price}</Text>
            </View>
        )
        
    }

 
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.result_board}>
                    <Text style={styles.header}>Stenoledes rysm</Text>
                    <View>
                        <Text style={styles.category}>Food</Text>
                        <View style={styles.itemlist}>
                            <Text style={styles.itemlist_title}>Name</Text>
                            <Text style={styles.itemlist_title}>Price</Text>
                        </View>
                        <View style={{marginTop:5}}>
                        <FlatList
                            data={foodlist}
                            renderItem={renderItem}
                            keyExtractor={item => item?.id}
                            showsVerticalScrollIndicator={false}
                        /> 
                        </View>
                    </View>

                    <View>
                        <Text style={styles.category}>Electronics</Text>
                        <View style={styles.itemlist}>
                            <Text style={styles.itemlist_title}>Name</Text>
                            <Text style={styles.itemlist_title}>Price</Text>
                        </View>
                        <View style={{marginTop:5}}>
                        <FlatList
                            data={elelist}
                            renderItem={renderItem}
                            keyExtractor={item => item?.id}
                            showsVerticalScrollIndicator={false}
                        /> 
                        </View>
                    </View>
                </View>

                <View style={{paddingHorizontal:30, marginTop:90}}>
                <TouchableOpacity style={styles.btn} onPress = {() => navigation.navigate('Main')}>
                    <Text style={styles.btn_text}>Back</Text>
                </TouchableOpacity>
                </View> 
                
            </View> 
        </SafeAreaView>
    )
    
}
    
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:20,
        height:'100%',
        backgroundColor:'#E5E5E5',
    },
        
       result_board:{
        backgroundColor:'#FFFFFF',
        padding:24
    },

       header:{
        fontSize:22,
        fontWeight:'700'
    },

       category:{
        textAlign:'center',
        marginTop:10,
        fontWeight:'700',
        fontSize:17
    },

       itemlist:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

       itemlist_title:{
        fontSize:15,
        fontWeight:'700'
    },

       item:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

       btn:{
        backgroundColor: '#4F44D0',
        borderRadius: 50,
        paddingVertical: 21,
    },
    
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 20,
    },
    }) 
export default ReceiptResult;