/* eslint-disable prettier/prettier */
/* eslint-disable semi */


import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import auth from '@react-native-firebase/auth';

export default class AuthorApp extends Component {
    componentDidMount = async () => {
        //const userDataJson = await AsyncStorage.getItem('userData')
        //let userData = null
        let user = null
        try {
            //userData = JSON.parse(userDataJson)
            user = await auth().currentUser
        } catch (e) {
            console.log(e)
        }
        if (user && user.token) {
            //axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
            console.log(user)
            this.props.navigation.navigate('Cardápio', user)
        } else {
            this.props.navigation.navigate('Login')
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
})
