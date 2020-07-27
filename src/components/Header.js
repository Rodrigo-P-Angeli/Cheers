/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => /*this.props.navigation.openDrawer()*/ { }} style={styles.buttonBars}>
                    <Icon name={'bars'} size={20} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.title}>Cheers</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#841584',
        flexDirection: 'row',
    },
    title: {
        fontFamily: '',
        fontSize: 30,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: Dimensions.get('window').width / 3,
    },
    buttonBars: {
        alignSelf: 'center',
        padding: 10,
    },
})
