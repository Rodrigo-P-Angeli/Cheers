import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin';
//import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';

import AsyncStorage from '@react-native-community/async-storage';

import { USER_LOGGING, USER_LOGOUT } from '../ActionsTypes'

GoogleSignin.configure({
    webClientId: '892771746259-251tnb3pc7f01nol5dc2pgk85rl1cqai.apps.googleusercontent.com',
});

export const logout = () => {
    return async dispatch => {
        try {
            await auth().signOut()
            console.log('saiu')
        } catch (err) {
            console.log(err)
        }
        dispatch(logOut())
    }
}
export const login = (email, senha) => {
    return async dispatch => {
        try {
            const user = await auth().signInWithEmailAndPassword(email, senha)
            const idToken = user.user.getIdToken()
            console.log(user, 'userToken', idToken)
        } catch (err) {
            console.log(err)
        }
        dispatch(UserSignIn(user, idToken))
    }
}

export const onGoogleButtonPress = () => {
    return async dispatch => {
        // Get the users ID token
        const { idToken, user } = await GoogleSignin.signIn();
        //this.setState({ idToken })
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        auth().signInWithCredential(googleCredential);

        const jsonUser = JSON.stringify(user)
        const jsonUserToken = JSON.stringify(idToken)
        try {
            await AsyncStorage.setItem('userData', jsonUser)
            await AsyncStorage.setItem('userToken', jsonUserToken)
        } catch (e) {
            console.log(e)
        }

        dispatch(userSignIn(user, idToken))
    }
}

export const saveUser = (user, idToken) => {
    return async dispatch => {

        const jsonUser = JSON.stringify(user)
        const jsonUserToken = JSON.stringify(idToken)
        try {
            await AsyncStorage.setItem('userData', jsonUser)
            await AsyncStorage.setItem('userToken', jsonUserToken)
        } catch (e) {
            console.log(e)
        }
        dispatch(userSignIn(user, idToken))
    }
}
export const loadUser = async () => {
    let user = null
    let idToken = null
    try {
        user = await auth().currentUser
        console.log(user)
        //const idToken = user.user.getIdToken()
    } catch (e) {
        console.log(e)
    }
    return dispatch => {
        dispatch(userSignIn(user, idToken))
    }
}



export const userSignIn = (user, idToken) => {
    return {
        type: USER_LOGGING,
        payload: {
            user,
            idToken
        }
    }
}
export const logOut = () => {
    return {
        type: USER_LOGOUT,
    }
}
