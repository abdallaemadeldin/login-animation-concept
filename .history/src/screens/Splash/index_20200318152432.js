import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { style } from './style';

const { Value, parallel, sequence, timing, View, Text, Image } = Animated;

const SignIn = () => {
    const { container, topCircle, logoName, logo } = style;
    const [position] = useState(new Value(0));
    const animatedPosition = position.interpolate({
        inputRange: [0, 1],
        outputRange: ['-10%', '-80%']
    });

    useEffect(() => {
        sequence([
            timing(position, {
                toValue: 1,
                duration: 15000
            })
        ]).start();
    }, []);

    return (
        <SafeAreaView style={container}>
            <View style={[topCircle, { top: animatedPosition }]}>
                <Image source={require('./../../assets/logo.png')} style={logo} />
            </View>

        </SafeAreaView>
    );
}

export default memo(SignIn);