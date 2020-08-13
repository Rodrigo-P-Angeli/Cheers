import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';

import Header from '../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../CommonStyles';
import { postPedido } from '../store/actions/cardapio';

class ConfirmaPedido extends Component {

    render() {
        return (
            <ImageBackground source={require('../../assets/images/BackGroundBody.jpg')} style={styles.imageback}>
                <View>
                    <Header hidden={true} {...this.props} />
                    <TouchableOpacity onPress={() => {
                        this.props.postPedido(this.props.user, this.props.cardapio, this.props.endereco, this.props.total)
                        this.props.navigation.navigate('AppDrawer')
                    }
                    }>
                        <Text>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    imageback: {
        flex: 1,
        resizeMode: 'contain'
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