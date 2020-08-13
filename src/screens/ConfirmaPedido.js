import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';

import Header from '../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../CommonStyles';
import { postPedido } from '../store/actions/cardapio';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

class ConfirmaPedido extends Component {

    render() {
        return (
            <ImageBackground source={require('../../assets/images/BackGroundBody.jpg')} style={styles.imageback}>
                <View>
                    <Header hidden={true} {...this.props} />
                    <View style={styles.container}>

                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            activeOpacity={.6}
                            style={[styles.finalizar, { backgroundColor: 'red',  }]}
                            onPress={() => {
                                this.props.navigation.navigate('AppDrawer')
                            }}>
                            <Feather name={'x'} size={50} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.6}
                            style={styles.finalizar}
                            onPress={() => {
                                this.props.postPedido(this.props.user, this.props.cardapio, this.props.endereco, this.props.total)
                                this.props.navigation.navigate('AppDrawer')
                            }}>
                            <FontAwesome name={'check'} size={50} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    imageback: {
        flex: 1,
        resizeMode: 'contain'
    },
    container: {
        justifyContent: 'center',
        margin: 30,
        backgroundColor: 'white',
        width: '80%',
        height: '60%',
        alignSelf: 'center'
    },
    finalizar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})


const mapStateToProps = ({ cardapio, user }) => {
    return {
        cardapio: cardapio.cardapioo,
        total: cardapio.total,
        user: user.user,
        endereco: user.endereco,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postPedido: (user, pedido, endereco, total) => dispatch(postPedido(user, pedido, endereco, total)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmaPedido)