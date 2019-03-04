import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    logoImage: {
        width: 148,
        height: 140,
        resizeMode: 'cover'
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
