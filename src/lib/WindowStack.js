import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './../screens/Splash';

const Stack = createStackNavigator();

export default WindowStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" mode="card" initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}