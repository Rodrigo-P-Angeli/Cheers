/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import CommonStyles from '../CommonStyles'

export default class App extends Component {
    render() {
        return (
            <View elevation={10} style={{backgroundColor: 'white'}}>
                <ImageBackground style={styles.container} source={require('../../assets/images/BackGroundHeader.jpg')}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.buttonBars}>
                        <Icon name={'bars'} size={30} color={'black'} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Cheers</Text>
                </ImageBackground>
            </View>
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
        fontFamily: CommonStyles.fontFamilyTitle,
        fontSize: 50,
        alignSelf: 'center',
        color: 'black',
        paddingLeft: Dimensions.get('window').width / 4,
    },
    buttonBars: {
        alignSelf: 'center',
        padding: 10,
    },
})
