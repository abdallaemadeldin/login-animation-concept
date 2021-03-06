import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { style } from './style';

const { Value, parallel, sequence, timing, View, Text, Image } = Animated;

const SignIn = () => {
    const { container, topCircle, logoName, logo } = style;
    const [position] = useState(new Value(0));
    const [logoOpacity] = useState(new Value(0));
    const [logoPosition] = useState(new Value(0));
    const animatedPosition = position.interpolate({
        inputRange: [0, 1],
        outputRange: ['-10%', '-80%']
    });
    const animatedLogoPosition = logoPosition.interpolate({
        inputRange: [0, 1],
        outputRange: ['70%', '45%']
    });

    useEffect(() => {
        sequence([
            parallel([
                timing(logoOpacity, {
                    toValue: 1,
                    duration: 1000
                }),
                timing(logoPosition, {
                    toValue: 1,
                    duration: 1000
                })
            ]),
            timing(position, {
                toValue: 1,
                duration: 1500
            })
        ]).start();
    }, []);

    return (
        <SafeAreaView style={container}>
            <View style={[topCircle, { top: animatedPosition }]}>
                <Image source={require('./../../assets/logo.png')} style={[logo, { bottom: animatedLogoPosition, opacity: logoOpacity }]} />
                <Text style={logoName}>CHAT APP</Text>
            </View>

        </SafeAreaView>
    );
}

export default memo(SignIn);