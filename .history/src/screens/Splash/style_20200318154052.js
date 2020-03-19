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
        backgroundColor: Colors.secondary,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.red,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputLabel: {
        position: 'absolute',
        backgroundColor: Colors.secondary
    }
});