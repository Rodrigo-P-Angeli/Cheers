/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import auth from '@react-native-firebase/auth';

export default class AuthorApp extends Component {
    componentDidMount = async () => {
        let user = null
        try {
            user = await auth().currentUser
        } catch (e) {
            console.log(e)
        }
        if (user) {
            this.props.navigation.navigate('Cardápio')
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
