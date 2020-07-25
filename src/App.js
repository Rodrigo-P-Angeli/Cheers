/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Header from './components/Header';
import { connect } from 'react-redux'
import ItemCardapio from './components/CardapioItem';

import { loadCardapio } from './store/actions/cardapio';
import { calcTotalItem } from './store/actions/total';

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
                <FlatList
                    data={this.props.cardapio}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <ItemCardapio {...item} setTotal={this.props.onSetItemQt()} />} />
                <View style={styles.body}>
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
                                color={Cores.Botoes}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
})

const mapStateToProps = ({ cardapio, total }) => {
    return {
        cardapio: cardapio.cardapioo,
        total: total.total,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadScreen: () => dispatch(loadCardapio()),
        onSetItemQt: () => dispatch(calcTotalItem()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
