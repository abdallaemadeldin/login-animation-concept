import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default WindowStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" mode="card">

            </Stack.Navigator>
        </NavigationContainer>
    );
}