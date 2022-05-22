import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStore, combineReducers } from 'redux';
import appReducer from './src/redux/reducers/AppReducers';
import logo from './src/assets/images/AppLogo.png';


import { Provider as ReduxProvider } from 'react-redux';


const supaReducer = combineReducers ({
  app:appReducer,
})

const store = createStore(supaReducer);

const Stack = createNativeStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = 'white';

const App = () => {
  return(
   <ReduxProvider store={store}>
       <NavigationContainer
       theme={navTheme}>
       <Stack.Navigator>
         <Stack.Screen
         name="Navigation"
         component={Navigation}
         options={{headerShown: false}}/>

       </Stack.Navigator>
      </NavigationContainer>
   </ReduxProvider>
    
   
 
 
  )

};



export default App;
