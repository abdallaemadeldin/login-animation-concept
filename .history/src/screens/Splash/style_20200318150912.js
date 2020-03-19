import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'chatApp/app.json';

const { width, height, scale } = Dimensions.get('screen');

export const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    topCircle: {
        width: '50%',
        height: '50%',
        borderRadius: height * 25 / 100,
        backgroundColor: Colors.chatBoxLeft
    }
});