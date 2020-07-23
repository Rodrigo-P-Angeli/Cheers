/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';

export default class App extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Text>dfg</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
