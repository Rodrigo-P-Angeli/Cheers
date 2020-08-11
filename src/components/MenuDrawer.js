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


import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class menuDrawer extends Component {
    componentDidMount() {
        console.log(this.props.user)
    }
    state = {
        email: '',
        name: ',',
    }
    logout = async () => {
        try {
            await auth().signOut()
            console.log('saiu')
            this.props.onSignOut()
        } catch (err) {
            console.log(err)
        }
        try {
            await AsyncStorage.removeItem('userData')
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Cheers</Text>
                    <View style={styles.content}>
                        {/* <Image style={styles.image} source={this.props.user.image} /> */}
                        <View style={{ flex: 1, justifyContent: 'space-around' }}>
                            <View style={styles.itens}>
                                <AntDesign name={'user'} size={15} />
                                <Text style={styles.contato}>{this.props.user.displayName}</Text>
                            </View>
                            <View style={styles.itens}>
                                <Email name={'email'} size={15} />
                                <Text style={styles.contato}>{this.props.user.email}</Text>
                            </View>
                            <View style={styles.itens}>
                                <Icon name={'phone'} size={15} />
                                <Text style={styles.contato}>{this.props.user.phoneNumber}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <DrawerContentScrollView {...this.props}>
                    <DrawerItemList {...this.props} />
                </DrawerContentScrollView>
                <View style={styles.logoutButton}>
                    <TouchableOpacity onPress={() => this.logout()}>
                        <AntDesign name='logout' size={30} />
                    </TouchableOpacity>
                </View>
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
        fontSize: 30,
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
    logoutButton: {
        paddingBottom: 30,
        paddingRight: 30,
        alignItems: 'flex-end',
    }
})