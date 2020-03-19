import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { style } from './style';

const Splash = () => {
    const { container, topCircle, logo } = style;
    return (
        <SafeAreaView style={container}>
            <View style={topCircle}>
                <Text>CHAT APP</Text>
            </View>

        </SafeAreaView>
    );
}

export default React.memo(Splash);