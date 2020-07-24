/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

export default class ItemCardapio extends Component {
    render() {
        return (
            <View style={{ padding: 5, paddingBottom: 0 }}>
                <View style={styles.container} elevation={2}>
                    <View style={styles.desc}>
                        <Text style={styles.marca}>{this.props.marca} {this.props.tipo}</Text>
                        <Text>R$ {this.props.price.toFixed(2).replace('.', ',')}</Text>
                    </View>
                    <View style={styles.setQuant}>
                        <View style={{ flexDirection: 'row', paddingTop: 3, }}>
                            <View style={{ flex: 1 }}>
                                <Button
                                    //onPress={() => props.setless(this.props.id)}
                                    title="-"
                                    color="#841584"
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    textAlign={'center'}
                                    style={{ height: 40 }}
                                    placeholder={'0'}
                                    value={this.props.quantidade.toString()}
                                    //onChangeText={text => this.props.onChangeText(this.props.id, text)}
                                    keyboardType={'numeric'}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button
                                    onPress={() => { }}
                                    title="+"
                                    color="#841584"
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text textAlign={'center'}>
                                R$ {this.props.total.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#e3e3e3',
        borderWidth: 0.1,
        padding: 5,
        borderRadius: 10,
    },
    desc: {
        flex: .7,
    },
    setQuant: {
        alignItems: 'center',
        flex: .3,
        justifyContent: 'center'
    },
    buttons: {
        flex: .4,
    },
    marca: {
        fontSize: 20,
    },
})
