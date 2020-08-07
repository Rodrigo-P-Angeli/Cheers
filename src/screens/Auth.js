/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, Button } from 'react-native'
import AuthInput from '../components/AuthInput'
import { GoogleSigninButton } from '@react-native-community/google-signin'
import CommonStyles from '../CommonStyles'
import { LoginButton } from 'react-native-fbsdk'

const initialState = {
    name: '',
    email: 'julia_norbim@hotmail.com',
    password: 'z1o2i3o4',
    confirmPassword: '',
    stageNew: false,
}

export default class Auth extends Component {

    state = { ...initialState }

    render() {
        const validation = []
        validation.push(this.state.email && this.state.email.includes('@'))
        validation.push(this.state.password && this.state.password.length >= 6)

        if (this.state.stageNew) {
            validation.push(this.state.name && this.state.name.length >= 3)
            validation.push(this.state.confirmPassword === this.state.password)
        }

        const validForm = validation.reduce((a, d) => a && d)
        return (
            <ImageBackground style={styles.backgroung} source={require('../../assets/images/BackGround.jpg')}>
                <Text style={styles.title}>Cheers</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>{this.state.stageNew ? 'Crie a sua conta' : 'Entrar com E-mail'}</Text>
                    {this.state.stageNew &&
                        <AuthInput icon={'user'} placeholder={'Nome'} value={this.state.name} style={styles.input} onChangeText={name => this.setState({ name })} />}
                    <AuthInput icon={'at'} placeholder={'Email'} value={this.state.email} style={styles.input} onChangeText={email => this.setState({ email })} />
                    <AuthInput icon={'lock'} secureTextEntry={true} placeholder={'Senha'} value={this.state.password} style={styles.input} onChangeText={password => this.setState({ password })} />
                    {this.state.stageNew &&
                        <AuthInput icon={'asterisk'} secureTextEntry={true} placeholder={'Confirmar Senha'} value={this.state.confirmPassword} style={styles.input} onChangeText={confirmPassword => this.setState({ confirmPassword })} />}
                    <TouchableOpacity disabled={!validForm} onPress={() => this.state.stageNew ? this.props.createUser(this.state.name, this.state.email, this.state.password) : this.props.loginUser(this.state.email, this.state.password)}>
                        <View style={[styles.button, validForm ? [] : { backgroundColor: '#AAA' }]}>
                            <Text style={styles.buttonText}>{this.state.stageNew ? 'Registrar' : 'Entrar'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, alignItems: 'center' }}>
                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={() => this.props.GoogleButtonPress()}
                        disabled={this.props.loadingUser} />
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.props.FacebookButtonPress()} disabled={this.props.loadingUser}>
                        <Text style={styles.loginButtonText}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={
                        () => this.setState({ stageNew: !this.state.stageNew })
                    }>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Fazer Login' : 'Criar conta'}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroung: {
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontFamily: CommonStyles.fontFamilyTitle,
        color: CommonStyles.Colors.secundary,
        fontSize: 70,
        marginBottom: 10,
    },
    subTitle: {
        color: 'white',
        fontFamily: CommonStyles.fontFamily,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        marginTop: 10,
        backgroundColor: 'white',
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: CommonStyles.fontFamily,
        color: 'white',
        fontSize: 20,
    },
    loginButton: {
        backgroundColor: 'blue',
        width: 180,
    },
    loginButtonText: {
        fontFamily: CommonStyles.fontFamily,
        color: 'white',
    }
})
