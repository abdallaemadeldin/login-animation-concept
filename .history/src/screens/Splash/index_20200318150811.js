import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { style } from './style';

const Splash = () => {
    const { container, topCircle } = style;
    return (
        <SafeAreaView style={container}>
            <View style={topCircle} />
        </SafeAreaView>
    );
}

export default React.memo(Splash);