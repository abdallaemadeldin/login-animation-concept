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
        alignItems: 'center',
        overflow: 'hidden'
    },
    inputContainer: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.red,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 4 / 100
    },
    inputLabel: {
        position: 'absolute',
        backgroundColor: Colors.secondary,
        top: '-20%',
        paddingHorizontal: '3%',
        left: '10%'
    },
    input: {
        width: '90%'
    },
    loginBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        transform: [{ scale: 0 }]
    },
    loginIcon: {
        color: Colors.secondary,
        fontSize: 30
    }
});