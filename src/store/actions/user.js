import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { GoogleSignin } from '@react-native-community/google-signin';
//import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';
import {
    USER_LOGGING,
    USER_LOGOUT,
    USER_SET_CEP,
    USER_SET_NUMERO,
    USER_SET_CIDADE,
    USER_SET_COMPLEMENTO,
    USER_SET_BAIRRO,
    USER_SET_RUA,
    LOADING_USER,
    FINISHED_LOADING_USER,
} from '../ActionsTypes'

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
        dispatch(loadUser())
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
        dispatch(loadingUserFunction())
        let user = null
        let endereco = null
        let fidelidade = null
        try {
            user = await auth().currentUser
            endereco = await database().ref('users').child(`${user.uid}/endereco`).once('value').then(
                snapshot => snapshot.val() ? endereco = snapshot.val() : null
            )
            fidelidade = await database().ref('users').child(`${user.uid}/fidelidade`).once('value').then(
                snapshot => snapshot.val() ? fidelidade = snapshot.val() : null
            )
            //const idToken = user.user.getIdToken()
        } catch (e) {
            console.log(e)
        }

        dispatch(userSignIn(user, endereco, fidelidade))
    }
}

export const onChangeCEP = (text) => {
    let newText = '';
    let numbers = '0123456789';
    for (var i = 0; i < 7; i++) {
        if (numbers.indexOf(text[i]) > -1) {
            newText = newText + text[i];
        }
    }
    return {
        type: USER_SET_CEP,
        payload: {
            text: newText,
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
    let newText = '';
    let numbers = '0123456789';
    for (var i = 0; i < text.length; i++) {
        if (numbers.indexOf(text[i]) > -1) {
            newText = newText + text[i];
        }
    }
    return {
        type: USER_SET_NUMERO,
        payload: {
            text: newText,
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


export const userSignIn = (user, endereco, fidelidade) => {
    return {
        type: USER_LOGGING,
        payload: {
            user,
            endereco,
            fidelidade,
        }
    }
}
export const logOut = () => {
    return {
        type: USER_LOGOUT,
    }
}

export const saveUserAddress = (user, endereco) => {
    return async dispatch => {
        try {
            await database().ref('users').child(`${user.uid}/endereco`).set({ ...endereco })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const loadingUserFunction = () => {
    return {
        type: LOADING_USER,
    }
}
export const finishedLoadingUser = () => {
    return {
        type: FINISHED_LOADING_USER,
    }
}