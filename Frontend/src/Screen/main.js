import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

//svg
import RightArrow from '../assets/images/rightarrow.svg';

const Main = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.touchContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Recommended')}>
                        <View style={styles.touch} >
                            <Text style={styles.touch_text}>Recommended Items</Text>
                            <RightArrow />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DiscountNearby')}>
                        <View style={styles.touch} >
                            <Text style={styles.touch_text}>Nearby Offers</Text>
                            <RightArrow />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { marginLeft: '18%' },
    btn: {
        marginTop: 10,
        backgroundColor: 'grey',
        borderRadius: 20,
        paddingVertical: 10
    },
    btn_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    },
    touchContainer: { paddingTop: 32 },
    touch: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    touch_text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#555555'
    }
})

export default Main;