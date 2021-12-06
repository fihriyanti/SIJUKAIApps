import React, { Component } from 'react'
import { View, Image, Text, ImageBackground, TextInput } from 'react-native'
import { Form, Item, Input, Label, Content, Icon, Button } from 'native-base'
import { Images } from '../Themes'


// Styles
import styles from './Styles/SignUpScreenStyles'
// import { Icon } from 'react-native-vector-icons/icon'

export default class SignUpScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageBackground source={Images.bg} resizeMode="cover" style={styles.image} imageStyle={{ opacity: 0.6 }}>
                    <View style={styles.centered}>
                        <Image source={Images.logoApp1} style={styles.logo} />
                    </View>
                    <View style={{ margin: 20 }}>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='user' style={{ color: '#112B41' }} />
                            <Input placeholder="Nama Panjang"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='Entypo' name='email' style={{ color: '#112B41' }} />
                            <Input placeholder="Email"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='phone' style={{ color: '#112B41' }} />
                            <Input placeholder="No HP (Aktif)"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='university' style={{ color: '#112B41' }} />
                            <Input placeholder="Asal Kampus"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='user' style={{ color: '#112B41' }} />
                            <Input placeholder="Username"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='key' style={{ color: '#112B41' }} />
                            <Input placeholder="Password"></Input>
                        </Item>
                        <Button full style={styles.btnLogin}>
                            <Text style={styles.txtLogin}>SIGN UP</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}