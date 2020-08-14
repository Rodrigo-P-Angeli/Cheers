import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CommonStyles from '../CommonStyles'

export default class ListaItems extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.desc}>{this.props.marca} {this.props.tipo}</Text>
                    <Text style={styles.price}>{this.props.price.toFixed(2).replace('.', ',')}</Text>
                </View>
                <Text style={[styles.desc, { alignSelf: 'center' }]}> x{this.props.quantidade}</Text>
                <Ionicons name={'arrow-forward-sharp'} color={'white'} size={10} style={styles.icon} />
                <Text style={styles.total}>{this.props.total.toFixed(2).replace('.', ',')}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        flexDirection: 'row',
    },
    desc: {
        flex: 1,
        color: 'white',
        fontFamily: CommonStyles.fontFamily,
    },
    price: {
        color: 'white',
        fontFamily: CommonStyles.fontFamily,
    },
    total: {
        flex: 1,
        color: 'white',
        fontFamily: CommonStyles.fontFamily,
        textAlign: 'right',
        alignSelf: 'center'
    },
    icon: {
        flex: 1,
        alignSelf: 'center'
    }
})
