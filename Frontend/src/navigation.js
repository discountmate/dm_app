import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//Navigation
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Screen
import Main from './Screen/main';
import Login from './Screen/Login';
import Profile from './Screen/Profile';
import Register from './Screen/Register/register_1'
import Register3 from './Screen/Register/register_3'
import Register4 from './Screen/Register/register_4'
import ForgetPwd from './Screen/ForgetPwd/ForgetPwd';
import ForgetPwd1 from './Screen/ForgetPwd/ForgetPwd1';
import ForgetPwd2 from './Screen/ForgetPwd/ForgetPwd2';
import DiscountNearby from './Screen/DiscountNearby';
import Setting from './Screen/Setting';
import ScanReceipt from './Screen/ScanReceipt';
import Recommended from './Screen/Recommended';
import ResetPwd from './Screen/ResetPwd';
import ReceiptResult from './Screen/receiptResult';
import ItemInfo from './Screen/ItemInfo';
import SearchItem from './Screen/SearchItem';

//svg
import ProflieIcon from './assets/images/manIcon.png';
import LeftArrow from './assets/images/leftArrow.svg';
import Scan from './assets/images/scan.svg';
import SearchIcon from './assets/images/SearchIcon.png';

const Navigation = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown:false }}
            />
            <Stack.Screen
                name='Recommended'
                component={Recommended}
                options={{
                    title: 'Recommended',
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerStyle,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SearchItem')}>
                            <Image style={styles.SearchIcon} source={SearchIcon} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={Platform.OS === 'ios' ? styles.ProflieIcon : ''}
                                onPress={() => navigation.navigate('Setting')}>
                                <Image style={styles.ProflieIcon} source={ProflieIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity on onPress={() => navigation.navigate('Scan')}>
                                <Scan />
                            </TouchableOpacity>
                        </>
                    )
                }}
            />
            <Stack.Screen
                name='SearchItem'
                component={SearchItem}
                options={{
                    title: "Search Items",
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerStyle,
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={Platform.OS === 'ios' ? styles.ProflieIcon : ''}
                                onPress={() => navigation.navigate('Setting')}>
                                <Image style={styles.ProflieIcon} source={ProflieIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity on onPress={() => navigation.navigate('Scan')}>
                                <Scan />
                            </TouchableOpacity>
                        </>
                    ),
                }}
            />
            <Stack.Screen
                name='ItemInfo'
                component={ItemInfo}
                options={{
                    title: 'ItemInfo',
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerStyle,
                    headerLeft: () => (
                        <>
                            <TouchableOpacity
                                style={styles.ProflieIcon}
                                onPress={() => navigation.goBack()}>
                                <LeftArrow />
                            </TouchableOpacity>
                        </>
                    ),
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={Platform.OS === 'ios' ? styles.ProflieIcon : ''}
                                onPress={() => navigation.navigate('Setting')}>
                                <Image style={styles.ProflieIcon} source={ProflieIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity on onPress={() => navigation.navigate('Scan')}>
                                <Scan />
                            </TouchableOpacity>
                        </>
                    )
                }}
            />
            <Stack.Screen
                name='Main'
                component={Main}
                options={{
                    title:"DiscountMate",
                    headerTitleAlign:'center',
                    headerTitleStyle: styles.headerStyle,
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={Platform.OS === 'ios' ? styles.ProflieIcon : ''}
                                onPress={() => navigation.navigate('Setting')}>
                                <Image style={styles.ProflieIcon} source={ProflieIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity on onPress={() => navigation.navigate('Scan')}>
                                <Scan />
                            </TouchableOpacity>
                        </>
                    )
                }}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ title:"Dashboard" }}
            />
            <Stack.Screen
                name='Register'
                component={Register}
                options={{}}
            />
            <Stack.Screen
                name='Register3'
                component={Register3}
                options={{ title:"Register" }}
            />
            <Stack.Screen
                name='Register4'
                component={Register4}
                options={{ title:"Register" }}
            />
            <Stack.Screen
                name='ForgetPwd'
                component={ForgetPwd}
                options={{
                    title: 'Forgot Password?',
                    headerLeft: () => (
                        <>
                            <TouchableOpacity onPress={() => navigation.replace('Login')}>
                                <LeftArrow />
                            </TouchableOpacity>
                        </>
                    )
                }}
            />
            <Stack.Screen
                name='ForgetPwd1'
                component={ForgetPwd1}
                options={{ title:'' }}
            />
            <Stack.Screen
                name='ForgetPwd2'
                component={ForgetPwd2}
                options={{ title:'' }}
            />
            <Stack.Screen
                name='DiscountNearby'
                component={DiscountNearby}
                options={{
                    title: 'Nearby Offers',
                    headerTitleAlign:'center',
                    headerTitleStyle: styles.headerStyle,
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.ProflieIcon}
                            onPress={() => navigation.goBack()}>
                            <LeftArrow />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={styles.ProflieIcon}
                            onPress={() => navigation.navigate('Setting')}>
                            <Image style={styles.ProflieIcon} source={ProflieIcon} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name='Setting'
                component={Setting}
                options={{
                    title: 'Setting',
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.ProflieIcon}
                            onPress={() => navigation.goBack()}>
                            <LeftArrow />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name='Scan'
                component={ScanReceipt}
                options={{
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.ProflieIcon}
                            onPress={() => navigation.goBack()}>
                            <LeftArrow />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name='Reset'
                component={ResetPwd}
                options={{
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.ProflieIcon}
                            onPress={() => navigation.goBack()}>
                            <LeftArrow />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name='ReceiptResult'
                component={ReceiptResult}
                options={{ title: 'Scan Result' }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    ProflieIcon: {
        width: 30,
        height:30,
        marginRight: 5
    },
    SearchIcon: {
        width: 30,
        height: 30,
        marginLeft: 5
    },
    headerStyle:{
        fontSize:22,
        fontWeight:'700',
        color:'#4F44D0'
    }
})
    
export default Navigation;