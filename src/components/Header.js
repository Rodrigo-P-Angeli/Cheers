/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Cheers</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'blue',
    },
})
