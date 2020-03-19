import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { style } from './style';

const Splash = () => {
    const { container, topCircle, logo } = style;
    return (
        <SafeAreaView style={container}>
            <View style={topCircle}>
                <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/whatsapp-512.png" }} style={logo} />
            </View>

        </SafeAreaView>
    );
}

export default React.memo(Splash);