import React, { Component } from 'react'
import { View, Image, Text, ImageBackground, TextInput } from 'react-native'
import { Form, Item, Input, Label, Content, Icon, Button } from 'native-base'
import { Images } from '../Themes'


// Styles
import styles from './Styles/LoginScreenStyles'
// import { Icon } from 'react-native-vector-icons/icon'

export default class LaunchScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageBackground source={Images.bg} resizeMode="cover" style={styles.image} imageStyle={{ opacity: 0.6 }}>
                    <View style={styles.centered}>
                        <Image source={Images.logoApp1} style={styles.logo} />
                        {/* <View> */}

                        {/* </View> */}
                    </View>
                    <View style={{margin: 20}}>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='user' style={{color: '#112B41'}} />
                            <Input placeholder="Username"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='key' style={{color: '#112B41'}} />
                            <Input placeholder="Password"></Input>
                        </Item>
                        <Button full style={styles.btnLogin}>
                            <Text style={styles.txtLogin}>SIGN IN</Text>
                        </Button>
                        <Button full style={styles.btnSign}>
                            <Text style={styles.txtSign}>SIGN UP</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}