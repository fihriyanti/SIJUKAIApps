import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Images } from '../Themes'
import LinearGradient from 'react-native-linear-gradient'


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

    render() {
        return (
            // <View style={styles.mainContainer}>
                <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 0}} colors={['#112B41', '#728390', '#728390']} style={styles.container}>
                </LinearGradient>
            // </View>
        )
    }
}