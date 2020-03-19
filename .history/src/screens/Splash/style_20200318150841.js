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

    }
});