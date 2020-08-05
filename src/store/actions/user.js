import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin';
//import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';

import { USER_LOGGING, USER_LOGOUT, USER_SET_CEP, USER_SET_NUMERO, USER_SET_CIDADE, USER_SET_COMPLEMENTO, USER_SET_BAIRRO, USER_SET_RUA } from '../ActionsTypes'

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
        } catch (err) {
            console.log(err)
        }
        dispatch(UserSignIn(user))
    }
}

export const onGoogleButtonPress = () => {
    return async dispatch => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        //this.setState({ idToken })
        // Create a Google credential with the token
        const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        await auth().signInWithCredential(googleCredential);
        dispatch(loadUser())
    }
}

export const loadUser = () => {
    return async dispatch => {
        let user = null
        try {
            user = await auth().currentUser
            //const idToken = user.user.getIdToken()
        } catch (e) {
            console.log(e)
        }

        dispatch(userSignIn(user))
    }
}

export const onChangeCEP = (text) => {
    return {
        type: USER_SET_CEP,
        payload: {
            text,
        }
    }
}

export const onChangeCidade = (text) => {
    return {
        type: USER_SET_CIDADE,
        payload: {
            text,
        }
    }
}

export const onChangeBairro = (text) => {
    return {
        type: USER_SET_BAIRRO,
        payload: {
            text,
        }
    }
}

export const onChangeRua = (text) => {
    return {
        type: USER_SET_RUA,
        payload: {
            text,
        }
    }
}

export const onChangeNumero = (text) => {
    return {
        type: USER_SET_NUMERO,
        payload: {
            text,
        }
    }
}

export const onChangeComplemento = (text) => {
    return {
        type: USER_SET_COMPLEMENTO,
        payload: {
            text,
        }
    }
}


export const userSignIn = (user) => {
    return {
        type: USER_LOGGING,
        payload: {
            user,
        }
    }
}
export const logOut = () => {
    return {
        type: USER_LOGOUT,
    }
}

