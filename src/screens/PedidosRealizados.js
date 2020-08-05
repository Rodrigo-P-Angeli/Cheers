import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class PedidosRealizados extends Component {
    state = {
        pedidos: []
    }

    componentDidMount = () => {
        await database().ref('users').child(`${user.uid}/pedidos`).once('value').then(snapshot => {
            let pedidos = snapshot.val() ? snapshot.val() : []
            pedidos.map(element => {
                await database().ref('pedidos').child(`${element}`).once('value').then(snapshot => {
                    let pedidos2 = snapshot.val()
                    this.setState({ pedidos: pedidos2 })
                })
            });
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.pedidos.map(item => <Text>{item.marca}</Text>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})