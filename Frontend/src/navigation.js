import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
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
import ForgetPwd from './Screen/ForgetPwd';
import DiscountNearby from './Screen/DiscountNearby';
import Setting from './Screen/Setting';
import ScanReceipt from './Screen/ScanReceipt';


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
                    title:"Welcome",
                    headerTitleStyle: {fontSize:30,},
                    headerRight: () => (
                        <>
                           <TouchableOpacity
                           style={styles.ProflieIcon}
                           onPress={() => navigation.navigate('Profile')}>
                                <ProflieIcon />
                            </TouchableOpacity>

                            <TouchableOpacity
                            style={styles.ProflieIcon}
                            onPress={() => navigation.navigate('Scan')}>
                                <Scan />
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
