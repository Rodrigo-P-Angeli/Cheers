/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';


import Icon from 'react-native-vector-icons/FontAwesome'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'



export default class menuDrawer extends Component {

    logout = async () => {
        try {
            await auth().signOut()
            console.log('saiu')
        } catch (err) {
            console.log(err)
        }
        try {
            await AsyncStorage.removeItem('userData')
        } catch (e) {
            console.log(e)
        }
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Cheers</Text>
                    <View style={styles.content}>
                        {/* <Image style={styles.image} source={{uri: this.state.fotoPerfil}} /> */}
                        <View style={{ flex: 1, justifyContent: 'space-around' }}>
                            <View style={styles.itens}>
                                <Email name={'email'} size={15} />
                                {/* <Text style={styles.contato}>{this.state.email}</Text> */}
                            </View>
                            <View style={styles.itens}>
                                <Icon name={'phone'} size={15} />
                                {/* <Text style={styles.contato}>{this.state.phone}</Text> */}
                            </View>
                            <Button title={'logout'} onPress={() => this.logout()} />
                        </View>
                    </View>
                </View>
                <DrawerContentScrollView {...this.props}>
                    <DrawerItemList {...this.props} />
                </DrawerContentScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        padding: 10,
        fontFamily: 'Roboto-Bold',
    },
    contato: {
        fontSize: 13,
        paddingLeft: 5,
        fontFamily: 'Roboto-Light',
    },
    container: {
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    content: {
        flexDirection: 'row',
        padding: 5,
    },
    itens: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
})