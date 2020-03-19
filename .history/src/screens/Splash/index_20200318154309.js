import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, Animated, TextInput, TouchableOpacity } from 'react-native';
import { style } from './style';

const { Value, parallel, sequence, timing, View, Text, Image } = Animated;

const SignIn = () => {
    const { container, topCircle, logoName, logo, formView, inputContainer, inputLabel, input } = style;
    const [position] = useState(new Value(0));
    const [logoOpacity] = useState(new Value(0));
    const [logoPosition] = useState(new Value(0));
    const [namePosition] = useState(new Value(0));
    const [nameOpacity] = useState(new Value(0));
    const [height] = useState(new Value(0));
    const animatedPosition = position.interpolate({
        inputRange: [0, 1],
        outputRange: ['-10%', '-90%']
    });
    const animatedLogoPosition = logoPosition.interpolate({
        inputRange: [0, 1],
        outputRange: ['70%', '45%']
    });
    const animatedHeight = height.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '50%']
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
            }),
            parallel([
                timing(namePosition, {
                    toValue: 70,
                    duration: 1000
                }),
                timing(nameOpacity, {
                    toValue: 1,
                    duration: 1000
                })
            ]),
            timing(height, {
                toValue: 1,
                duration: 1000
            })
        ]).start();
    }, []);

    return (
        <SafeAreaView style={container}>
            <View style={[topCircle, { top: animatedPosition }]}>
                <Image source={require('./../../assets/logo.png')} style={[logo, { bottom: animatedLogoPosition, opacity: logoOpacity }]} />
                <Text style={[logoName, { opacity: nameOpacity, bottom: namePosition }]}>CHAT APP</Text>
            </View>

            <View style={[formView, { height: animatedHeight }]}>
                <View style={inputContainer}>
                    <Text style={inputLabel}>Email Address</Text>
                    <TextInput style={input} />
                </View>
                <View style={inputContainer}>
                    <Text style={inputLabel}>Password</Text>
                    <TextInput style={input} />
                </View>

                <TouchableOpacity>

                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default memo(SignIn);