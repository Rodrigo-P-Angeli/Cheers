import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';

import Header from '../components/Header'
import ItemPedido from '../components/ItemPedido'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../CommonStyles';

const initialState = {
    pedidos: []
}

class PedidosRealizados extends Component {
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        try {
            await database().ref('users').child(`${this.props.user.uid}/pedidos`).on('value',
                snapshot => {
                    let pedidos = snapshot.val() ? snapshot.val() : []
                    let pedidos2 = []
                    pedidos.forEach(async element => {
                        database().ref('pedidos').child(`${element}`).once('value').then(snapshot => {
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
            <ImageBackground style={styles.container} source={require('../../assets/images/BackGroundBody.jpg')}>
                <Header {...this.props} />
                <ScrollView>
                    {this.state.pedidos.map((item) =>
                        <View style={styles.item} key={Math.random()}>
                            <View style={{ height: 100, flex: 2, justifyContent: 'space-between', borderWidth: 1 }}>
                                <Text style={styles.text}>Data: {item.data}</Text>
                                <Text style={styles.text}>Entrega em: {item.endereco.rua}, n° {item.endereco.numero}, {item.endereco.bairro}, {item.endereco.cidade}, {item.endereco.estado}{item.endereco.complemento ? `, ${item.endereco.complemento}` : null}</Text>
                                <Text style={styles.text}>Status: {item.status}</Text>
                            </View>
                            <View style={{ height: 100, flex: 1, justifyContent: 'space-between', borderWidth: 1 }}>
                                <Text style={styles.text}># {item.numeroPedido}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[styles.text, { fontSize: 15 }]}>{'Total:\nR$'}</Text>
                                    <Text style={[styles.text, { flex: 1, textAlign: 'right', fontSize: 20 }]}>{item.total.toFixed(2).replace('.', ',')}</Text>
                                </View>
                            </View>
                            {/* {item.pedido.map(item => <ItemPedido {...item} key={Math.random()} />)} */}
                        </View>)}
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#e3e3e3',
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 5,
        borderWidth: 1,
        height: 100,
    },
    text: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 15,
        //padding: 2,
    }
})

const mapStateToProps = ({ user }) => {
    return {
        user: user.user,
    }
}

export default connect(mapStateToProps)(PedidosRealizados)