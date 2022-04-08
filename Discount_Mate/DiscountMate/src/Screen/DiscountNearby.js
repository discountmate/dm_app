import React, { useState } from "react";
import {
    View,
    Text, 
    StyleSheet, 
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

const DiscountNearby = () => {
    const[clickedTab, setclickedTab] = useState('');
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.tab}>
                    <TouchableOpacity onPress={()=>setclickedTab('Nearby')}>
                        <Text style={clickedTab == 'Nearby' ? styles.activeTab : styles.inactiveTab}>
                            History
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:16}} onPress={()=>setclickedTab('Trends')}>
                        <Text style={clickedTab == 'Trends' ? styles.activeTab: styles.inactiveTab}>
                            Account
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    tab:{
        flexDirection:'row',
        marginTop: 10,
        justifyContent:'flex-start'
    },
    activeTab:{
        color:'black',
        fontSize:24,
        fontWeight:'bold',
    },
    inactiveTab:{
        fontSize:24,
        fontWeight:'bold',
    }
}) 
export default DiscountNearby;