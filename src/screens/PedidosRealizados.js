import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';

import Header from '../components/Header'
import ItemPedido from '../components/ItemPedido'
import { TouchableOpacity } from 'react-native-gesture-handler';

class PedidosRealizados extends Component {
    state = {
        pedidos: []
    }

    componentDidMount = async () => {
        let pedidos2 = []
        try {
            await database().ref('users').child(`${this.props.user.uid}/pedidos`).once('value').then(snapshot => {
                let pedidos = snapshot.val() ? snapshot.val() : []
                pedidos.forEach(async element => {
                    await database().ref('pedidos').child(`${element}`).once('value').then(snapshot => {
                        pedidos2.push(snapshot.val())
                        this.setState({ pedidos: pedidos2 })
                    })
                })
            })
        }
        catch (err) {
            console.log(err)
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                {this.state.pedidos.map((item) =>
                    <TouchableOpacity key={Math.random()}>
                        <Text>{item.endereco}</Text>
                        {item.pedido.map(item => <ItemPedido {...item} key={Math.random()} />)}
                    </TouchableOpacity>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

const mapStateToProps = ({ user }) => {
    return {
        user: user.user,
    }
}

export default connect(mapStateToProps)(PedidosRealizados)