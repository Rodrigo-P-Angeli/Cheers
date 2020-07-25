/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Header from './components/Header';
import { connect } from 'react-redux';

import ItemCardapio from './components/CardapioItem';

import { loadCardapio, setMore, setLess, setQuantidade } from './store/actions/cardapio';
///import { calcTotalItem } from './store/actions/total';

class App extends Component {
    state = {
        cardapio: [],
    }
    componentDidMount() {
        this.props.onLoadScreen()
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.body}>
                    <FlatList
                        data={this.props.cardapio}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <ItemCardapio {...item} setMore={this.props.onSetMore} setLess={this.props.onSetLess} setqt={this.props.onSetQt} />} />
                </View>
                <View style={styles.bottom}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 2, justifyContent: 'space-between' }}>
                            <Text style={styles.texTotal}>Total:</Text>
                            <Text style={{ fontWeight: 'bold' }}> R$:  </Text>
                        </View>
                        <View style={styles.containerTotal}>
                            <Text style={styles.total}>{this.props.total.toFixed(2).replace('.', ',')}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            //onPress={this.finalizaPedido}
                            title={'Finalizar pedido'}
                            color={'#841584'} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        padding: 10,
        alignSelf: 'flex-end',
    },
    body: {
        flex: 1,
    },
    total: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    containerTotal: {
        flex: 8,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
    },
})

const mapStateToProps = ({ cardapio }) => {
    return {
        cardapio: cardapio.cardapioo,
        total: cardapio.total,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadScreen: () => dispatch(loadCardapio()),
        onSetMore: (id) => dispatch(setMore(id)),
        onSetLess: (id) => dispatch(setLess(id)),
        onSetQt: (id, text) => dispatch(setQuantidade(id, text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
