import React, { Component } from 'react'
import { View, Image, Text, ImageBackground, TextInput } from 'react-native'
import { Form, Item, Input, Label, Content, Icon, Button } from 'native-base'
import { Images } from '../Themes'


// Styles
import styles from './Styles/SignUpScreenStyles'
// import { Icon } from 'react-native-vector-icons/icon'

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            passw: '',
            nama: '',
            email: '',
            nohp: '',
            kampus: '',
        }
    }

    signup = () => {
        var user = this.state.uname;
        var pass = this.state.passw;
        var nama = this.state.nama;
        var email = this.state.email;
        var nohp = this.state.nohp;
        var kampus = this.state.kampus;

        fetch('http://192.168.43.101/juaraapps/signup.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                uname: user,
                passw: pass,
                nama: nama,
                email: email,
                nohp: nohp,
                kampus: kampus,
            })
        })
            .then((response) => response.json())
            // .then((responseJson) => {
            //     if (responseJson == 'ok') {
            //         alert('Password Matched');
            //         this.props.navigation.navigate('HomeScreen')
            //     } else {
            //         alert('Failed');
            //     }
            // })
            .catch((error) => {
                console.error(error);
            });
        // alert('login pressed ' + user + ' ' + pass)
    }

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
                            <Input onChangeText={nama => this.setState({ nama })} placeholder="Nama Panjang"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='Entypo' name='email' style={{ color: '#112B41' }} />
                            <Input onChangeText={email => this.setState({ email })} placeholder="Email"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='phone' style={{ color: '#112B41' }} />
                            <Input onChangeText={nohp => this.setState({ nohp })} placeholder="No HP (Aktif)"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='university' style={{ color: '#112B41' }} />
                            <Input onChangeText={kampus => this.setState({ kampus })} placeholder="Asal Kampus"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='user' style={{ color: '#112B41' }} />
                            <Input onChangeText={uname => this.setState({ uname })} placeholder="Username"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='key' style={{ color: '#112B41' }} />
                            <Input secureTextEntry={true} onChangeText={passw => this.setState({ passw })} placeholder="Password"></Input>
                        </Item>
                        <Button full style={styles.btnLogin} onPress={this.signup}>
                            <Text style={styles.txtLogin}>SIGN UP</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}