/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button, ImageBackground } from 'react-native';
import Header from '../components/Header';
import { connect } from 'react-redux';

import ItemCardapio from '../components/CardapioItem';

import { loadCardapio, setMore, setLess, setQuantidade, postPedido } from '../store/actions/cardapio';
import Foot from '../components/Foot';
///import { calcTotalItem } from './store/actions/total';

class Cardapio extends Component {
    state = {
        cardapio: [],
    }
    componentDidMount() {
        this.props.onLoadScreen()
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/BackGroundBody.jpg')}
                    style={styles.image}>
                    <Header {...this.props} />
                    <View style={styles.body}>
                        <FlatList
                            data={this.props.cardapio}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => <ItemCardapio {...item} setMore={this.props.onSetMore} setLess={this.props.onSetLess} setqt={this.props.onSetQt} />} />
                    </View>
                    <Foot {...this.props} postPedido={this.props.postPedido} />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: '#FFFFBF'
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    body: {
        flex: 1,
    },
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
        onLoadScreen: () => dispatch(loadCardapio()),
        onSetMore: (id, qt) => dispatch(setMore(id, qt)),
        onSetLess: (id) => dispatch(setLess(id)),
        onSetQt: (id, text) => dispatch(setQuantidade(id, text)),
        postPedido: (user, pedido, endereco, total) => dispatch(postPedido(user, pedido, endereco, total)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cardapio)
