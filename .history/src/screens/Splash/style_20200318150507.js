import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height, scale } = Dimensions.get('screen');

export const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'red'
    }
});