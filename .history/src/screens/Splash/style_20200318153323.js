import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'chatApp/app.json';

const { width, height, scale } = Dimensions.get('screen');
const circleSize = height * 120 / 100;

export const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    topCircle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: Colors.gray,
        position: 'absolute',
        zIndex: -1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden'
    },
    logoName: {
        fontSize: 50
    },
    logo: {
        width: 100,
        height: 100,
        bottom: '45%'
    },
    formView: {
        width: width,
        height: '50%',
        backgroundColor: Colors.secondary,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});