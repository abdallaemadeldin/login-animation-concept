import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { style } from './style';

const { Value, parallel, sequence, timing, View, Text, Image } = Animated;

const SignIn = () => {
    const { container, topCircle, logoName } = style;
    const [] = useState();

    return (
        <SafeAreaView style={container}>
            <View style={[topCircle, {}]}>
                <Text style={logoName}>CHAT APP</Text>
            </View>

        </SafeAreaView>
    );
}

export default memo(SignIn);