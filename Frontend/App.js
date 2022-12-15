import React from 'react';
import Navigation from './src/navigation';
import appReducer from './src/redux/reducers/AppReducers';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStore, combineReducers} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';

const supaReducer = combineReducers ({
  app:appReducer,
})

const store = createStore(supaReducer);
const Stack = createNativeStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = 'white';

const App = () => {
    return (
        <ReduxProvider store={store}>
            <NavigationContainer theme={navTheme}>
                <Stack.Navigator>
                    <Stack.Screen
                      name="Navigation"
                      component={Navigation}
                      options={{ headerShown:false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
};

export default App;