import React, { Component } from 'react'
import { View, Image, Text, ImageBackground, TextInput } from 'react-native'
import { Form, Item, Input, Label, Content, Icon, Button } from 'native-base'
import { Images } from '../Themes'


// Styles
import styles from './Styles/LoginScreenStyles'
// import { Icon } from 'react-native-vector-icons/icon'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            passw: '',
        }
    }

    login = () => {
        var user = this.state.uname;
        var pass = this.state.passw;

        fetch('http://192.168.43.101/juaraapps/login.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                uname: user,
                passw: pass
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'ok') {
                    alert('Password Matched');
                    this.props.navigation.navigate('HomeScreen')
                } else {
                    alert('Try Again');
                }
            })
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
                        {/* <View> */}

                        {/* </View> */}
                    </View>
                    <View style={{ margin: 20 }}>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='user' style={{ color: '#112B41' }} />
                            <Input onChangeText={uname => this.setState({ uname })} placeholder="Username"></Input>
                        </Item>
                        <Item style={styles.bgInput} inlineLabel>
                            <Icon type='FontAwesome' name='key' style={{ color: '#112B41' }} />
                            <Input secureTextEntry={true} onChangeText={passw => this.setState({ passw })} placeholder="Password"></Input>
                        </Item>
                        <Text style={{ color: 'black', fontSize: 18, textAlign: 'right', marginBottom: 10, fontWeight: 'bold' }}>Forgot password?</Text>

                        <Button full style={styles.btnLogin} onPress={this.login}>
                            <Text style={styles.txtLogin}>SIGN IN</Text>
                        </Button>
                        <Button full style={styles.btnSign}
                            onPress={() => this.props.navigation.navigate('SignUpScreen')}
                        >
                            <Text style={styles.txtSign}>SIGN UP</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}