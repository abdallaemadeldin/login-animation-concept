import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'chatApp/app.json';

const { width, height, scale } = Dimensions.get('screen');
const circleSize = height * 150 / 100;

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
        top: 0,
        zIndex: -1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        paddingBottom: '20%'
    },
    logoName: {
        fontSize: 50
    }
});