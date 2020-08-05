import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class ListaItems extends Component {
    render () {
        return(
            <View style={styles.container}>
                <Text>{this.props.marca}</Text>
                <Text>{this.props.quantidade}</Text>
                <Text>{this.props.total}</Text>
                <Text>{this.props.price}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
    },
})
