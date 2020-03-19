import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'chatApp/app.json';

const { width, height, scale } = Dimensions.get('screen');
const circleSize = height * 70 / 100;

export const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    topCircle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: Colors.gray,
        position: 'absolute',
        top: '-20%',
        zIndex: -1
    },
    logo: {
        width: '50%',
        height: '50%'
    }
});