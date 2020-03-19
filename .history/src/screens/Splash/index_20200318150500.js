import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { style } from './style';

const Splash = () => {
    const { container } = style;
    return (
        <SafeAreaView style={container}>

        </SafeAreaView>
    );
}

export default React.memo(Splash);