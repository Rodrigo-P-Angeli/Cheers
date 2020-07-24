/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import { connect } from 'react-redux'
import { loadCardapio } from './store/actions/cardapio';
import database from '@react-native-firebase/database'

class App extends Component {
    state = {
        cardapio: [],
    }
    componentDidMount() {
        this.props.onLoadScreen()
        //database().ref('cardapio').on('value', snapshot => {this.setState({cardapio: snapshot.val()})})
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.cardapio}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Text>{item.marca}</Text>} />
                <Text>asdsfdgfh</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
})

const mapStateToProps = ({ cardapio }) => {
    return {
        cardapio: cardapio.cardapioo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadScreen: () => dispatch(loadCardapio())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
