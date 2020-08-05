import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';

import Header from '../components/Header'

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
                {this.state.pedidos.map((item) => item.pedido.map(item =>
                    <Text key={Math.random()}>
                        {item.marca}  {item.quantidade}  {item.price}
                    </Text>))}
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