/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Header from '../components/Header';
import { connect } from 'react-redux';

import ItemCardapio from '../components/CardapioItem';

import { loadCardapio, setMore, setLess, setQuantidade } from '../store/actions/cardapio';
import Foot from '../components/Foot';
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
                <Header {...this.props}/>
                <View style={styles.body}>
                    <FlatList
                        data={this.props.cardapio}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <ItemCardapio {...item} setMore={this.props.onSetMore} setLess={this.props.onSetLess} setqt={this.props.onSetQt} />} />
                </View>
                <Foot {...this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
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
