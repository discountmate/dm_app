import React from 'react';
import { Button, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//Navigation
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Screen
import Main from './Screen/main';
import Login from './Screen/Login';
import Profile from './Screen/Profile';
import Register from './Screen/Register'
import ForgetPwd from './Screen/ForgetPwd';
import DiscountNearby from './Screen/DiscountNearby';
import Setting from './Screen/Setting';

//svg
import ProflieIcon from './assets/images/icon.svg';
import LeftArrow from './assets/images/leftArrow.svg';



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
                name='Home'
                component={Main}
                options={{
                    title:"Welcome",
                    headerTitleStyle: {fontSize:30,},
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
                name='Profile'
                component={Profile}
                options={{
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
                name='Register'
                component={Register}
                options={{
                    
                }}
            />
            
            <Stack.Screen
                name='ForgetPwd'
                component={ForgetPwd}
                options={{
            
                }}
            />

            <Stack.Screen
                name='DiscountNearby'
                component={DiscountNearby}
                options={{
                    title:'',
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
        marginRight:15,
        paddingVertical:20,
    }
})
    
export default Navigation;
