/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cheers</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#841584',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        fontFamily: '',
        fontSize: 30,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
})
