/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/BackGroundHeader.jpg')}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.buttonBars}>
                    <Icon name={'bars'} size={20} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.title}>Cheers</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        resizeMode: 'contain',
    },
    title: {
        fontFamily: '',
        fontSize: 30,
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: Dimensions.get('window').width / 3,
    },
    buttonBars: {
        alignSelf: 'center',
        padding: 10,
    },
})
