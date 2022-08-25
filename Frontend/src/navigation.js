import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
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
import Register2 from './Screen/Register/register_2'
import Register3 from './Screen/Register/register_3'
import Register4 from './Screen/Register/register_4'
import ForgetPwd from './Screen/ForgetPwd/ForgetPwd';
import ForgetPwd1 from './Screen/ForgetPwd/ForgetPwd1';
import ForgetPwd2 from './Screen/ForgetPwd/ForgetPwd2';
import DiscountNearby from './Screen/DiscountNearby';
import Setting from './Screen/Setting';
import ScanReceipt from './Screen/ScanReceipt';
import ResetPwd from './Screen/ResetPwd';



//svg
import ProflieIcon from './assets/images/icon.svg';
import LeftArrow from './assets/images/leftArrow.svg';
import Scan from './assets/images/scan.svg';



const Navigation = () => {
    const navigation = useNavigation();
    return(
      
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                headerShown:false,
                }}
            />

            <Stack.Screen
                name='Main'
                component={Main}
                options={{
                    title:"DiscountMate",
                    headerTitleAlign:'center',
                    headerTitleStyle: {fontSize:22,fontWeight:'700', color:'#4F44D0'},
                    
                    headerRight: () => (
                        <>
                           <TouchableOpacity
                           style={Platform.OS === 'ios' ? styles.ProflieIcon : ''}
                           onPress={() => navigation.navigate('Profile')}>
                                <ProflieIcon/>
                            </TouchableOpacity>
                        </>
                    ),
                }}
            />

            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{
                    title:"Dashboard",
                
                }}
            />

            <Stack.Screen
                name='Register'
                component={Register}
                options={{
                    
                }}

            />
            <Stack.Screen
                name='Register2'
                component={Register2}
                options={{
                    title:"Register",
                }}
            />

            <Stack.Screen
                name='Register3'
                component={Register3}
                options={{
                    title:"Register",
                }}
            />

            <Stack.Screen
                name='Register4'
                component={Register4}
                options={{
                    title:"Register",
                }}
            />
         
            
            <Stack.Screen
                name='ForgetPwd'
                component={ForgetPwd}
                options={{
                    title:''
            
                }}
            />

            <Stack.Screen
                name='ForgetPwd1'
                component={ForgetPwd1}
                options={{
                    title:''
            
                }}
            />

            <Stack.Screen
                name='ForgetPwd2'
                component={ForgetPwd2}
                options={{
                    title:''
            
                }}
            />

            <Stack.Screen
                name='DiscountNearby'
                component={DiscountNearby}
                options={{
                    title:'Nearby Offerts',
                    headerTitleAlign:'center',
                    headerTitleStyle: {fontSize:22,fontWeight:'700', color:'#4F44D0'},
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
                        onPress={() => navigation.navigate('Profile')}>
                            <ProflieIcon />
                        </TouchableOpacity>
                        
                    ),
                }}
            />

            <Stack.Screen
                name='Setting'
                component={Setting}
                options={{
                    title:'Setting',
                    headerLeft: () => (
                        <TouchableOpacity
                        style={styles.ProflieIcon}
                        onPress={() => navigation.goBack()}>
                            <LeftArrow />
                        </TouchableOpacity>
                        
                    ),

                }}
            />

            <Stack.Screen
                name='Scan'
                component={ScanReceipt}
                options={{
                    title:'',
                    headerLeft: () => (
                        <TouchableOpacity
                        style={styles.ProflieIcon}
                        onPress={() => navigation.goBack()}>
                            <LeftArrow />
                        </TouchableOpacity>
                        
                    ),

                }}
            />

            <Stack.Screen
                name='Reset'
                component={ResetPwd}
                options={{
                    title:'',
                    headerLeft: () => (
                        <TouchableOpacity
                        style={styles.ProflieIcon}
                        onPress={() => navigation.goBack()}>
                            <LeftArrow />
                        </TouchableOpacity>
                        
                    ),

                }}
            />
         </Stack.Navigator>
       
    );
}

const styles = StyleSheet.create({
    ProflieIcon:{
        // marginBottom:30
    }
})
    
export default Navigation;
