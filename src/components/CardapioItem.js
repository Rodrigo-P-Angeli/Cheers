/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class ItemCardapio extends Component {
    render() {
        return (
            <View style={{ padding: 5, paddingBottom: 0 }}>
                <View style={styles.container} elevation={2}>
                    <View style={styles.desc}>
                        <Text>{this.props.marca} {this.props.tipo}</Text>
                        <Text>{this.props.volume}</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Button style={styles.button} title={'+'} onPress={() => { }} />
                        <Button style={styles.button} title={'-'} onPress={() => { }} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        flex: 1,
        borderWidth: 0.1,
        alignItems: 'center',
        borderRadius: 1,
    },
    desc: {
        flex: 8,
    },
    buttons: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-around',
        height: 30,
        alignItems: 'center',
    },
})
