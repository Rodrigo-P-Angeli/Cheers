/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */

import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native'

import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import { GoogleSignin } from '@react-native-community/google-signin';
//import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';

GoogleSignin.configure({
    webClientId: '892771746259-251tnb3pc7f01nol5dc2pgk85rl1cqai.apps.googleusercontent.com',
});

export default class App extends Component {
    state = {
        email: '',
        senha: '',
        isAuthenticated: false,
        text: '',
        usertoken: '',
        idToken: '',
    }
    login = async () => {
        const { email, senha } = this.state
        try {
            const user = await auth().signInWithEmailAndPassword(email, senha)
            const usertoken = user.user.getIdToken()
            this.setState({ isAuthenticated: true, usertoken: usertoken })
            console.log(user, 'userToken', usertoken)
        } catch (err) {
            console.log(err)
        }
    }
    logout = async () => {
        try {
            await auth().signOut()
            this.setState({ isAuthenticated: false })
            console.log('saiu')
        } catch (err) {
            console.log(err)
        }
    }
    enviar = async () => {
        try {
            await database().ref('/itens').push({
                texto: this.state.text,
            })
            console.log('Mensagem Enviada')
            this.setState({ text: '' })
        } catch (err) {
            console.log(err)
        }
    }
    onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        this.setState({ idToken })
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const authorized = auth().signInWithCredential(googleCredential);
        this.setState({ isAuthenticated: true })
        return authorized
    }
    /* onFacebookButtonPress = async () => {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        // Sign-in the user with the credential
        const authorized = auth().signInWithCredential(facebookCredential);
        this.setState({ isAuthenticated: true })
        return authorized
    }*/
    render() {
        return (
            <View style={{ flex: 1 }}>
                {!this.state.isAuthenticated ?
                    <View style={styles.container}>
                        <Text>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.email}
                            placeholder={'email'}
                            onChangeText={text => this.setState({ email: text })} />
                        <Text>Senha</Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.senha}
                            placeholder={'email'}
                            onChangeText={text => this.setState({ senha: text })} />
                        <View style={{ flexDirection: 'row' }}>
                            <Button title={'login'} onPress={this.login} />
                        </View>
                        <Button
                            title="Google Sign-In"
                            onPress={() => this.onGoogleButtonPress().then((res) => console.log('Signed in with Google!', res, this.state.idToken)).catch(err => console.log(err))}
                        />
                        {/* <Button
                            title="Facebook Sign-In"
                            onPress={() => this.onFacebookButtonPress().then((res) => console.log('Signed in with Facebook!', res)).catch(err => console.log(err))}
                        /> */}
                        {/* <LoginButton
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        console.log("login has error: " + result.error);
                                    } else if (result.isCancelled) {
                                        console.log("login is cancelled.");
                                    } else {
                                        AccessToken.getCurrentAccessToken().then(
                                            (data) => {
                                                console.log(data.accessToken.toString())
                                            }
                                        )
                                    }
                                }
                            }
                            onLogoutFinished={() => console.log("logout.")} /> */}
                    </View> : null}
                {this.state.isAuthenticated ?
                    <View style={styles.container}>
                        {this.state.isAuthenticated ? <Button title={'sair'} onPress={this.logout} /> : null}
                        {this.state.isAuthenticated ? <Text>Logado</Text> : null}
                        {this.state.isAuthenticated ? <TextInput
                            style={styles.input}
                            value={this.state.text}
                            placeholder={'email'}
                            onChangeText={text => this.setState({ text })} /> : null}
                        {this.state.isAuthenticated ? <Button title={'send'} onPress={this.enviar} /> : null}
                    </View> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 45,
        padding: 10,
        alignSelf: 'stretch',
    },
})
