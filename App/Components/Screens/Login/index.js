import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import styles from './styles';

const backgroundImage = require('../../../Images/BG.gif');
const logoImage = require('../../../Images/login-logo.png');


class LoginPage extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={backgroundImage} imageStyle={styles.imageStyle}>
                <View style={styles.logoContainer}>
                    <Image source={logoImage} style={styles.logoImage} />
                </View>
            </ImageBackground>
        );
    }
}

export default LoginPage;

