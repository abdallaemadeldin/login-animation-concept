import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { style } from './style';

const SignIn = () => {
    const { container, topCircle, logoName } = style;
    return (
        <SafeAreaView style={container}>
            <View style={topCircle}>
                <Text style={logoName}>CHAT APP</Text>
            </View>

        </SafeAreaView>
    );
}

export default React.memo(SignIn);