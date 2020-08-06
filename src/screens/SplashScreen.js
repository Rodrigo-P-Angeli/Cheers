/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default class AuthorApp extends Component {
    componentDidMount = async () => {
        await this.props.loadUser()
        await this.props.finishedLoadUser()
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
        backgroundColor: '#333',
    },
})
