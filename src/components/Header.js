/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import CommonStyles from '../CommonStyles'

export default class App extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/BackGroundHeader.jpg')}>
                {this.props.hidden ? <TouchableOpacity onPress={() => this.props.navigation.navigate('AppDrawer')} style={styles.buttonBars}>
                    <Icon name={'long-arrow-left'} size={30} color={CommonStyles.Colors.Title} />
                </TouchableOpacity> : <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.buttonBars}>
                        <Icon name={'bars'} size={30} color={CommonStyles.Colors.Title} />
                    </TouchableOpacity>}
                <Text style={styles.title}>Cheers</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        resizeMode: 'contain',
    },
    title: {
        fontFamily: CommonStyles.fontFamilyTitle,
        fontSize: 50,
        alignSelf: 'center',
        color: CommonStyles.Colors.Title,
        paddingLeft: Dimensions.get('window').width / 4,
    },
    buttonBars: {
        alignSelf: 'center',
        padding: 10,
    },
})
