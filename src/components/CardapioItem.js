/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import CommonStyles from '../CommonStyles'

export default class ItemCardapio extends Component {
    render() {
        return (
            <View style={{ padding: 5, paddingBottom: 0 }}>
                <View style={styles.container} elevation={2}>
                    <View style={styles.desc}>
                        <Text style={styles.marca}>{this.props.marca} {this.props.tipo}</Text>
                        <Text style={styles.priceText}>
                            R$ {this.props.price.toFixed(2).replace('.', ',')}
                        </Text>
                    </View>
                    <View style={styles.setQuant}>
                        <View style={{ flexDirection: 'row', paddingTop: 3, }}>
                            <View style={{ flex: 1 }}>
                                <Button
                                    onPress={() => this.props.setLess(this.props.id)}
                                    title="-"
                                    color={CommonStyles.Colors.buttons}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    textAlign={'center'}
                                    style={{ height: 40 }}
                                    placeholder={'0'}
                                    value={this.props.quantidade.toString()}
                                    onChangeText={text => this.props.setqt(this.props.id, text)}
                                    keyboardType={'numeric'}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button
                                    onPress={() => this.props.setMore(this.props.id)}
                                    title="+"
                                    color={CommonStyles.Colors.buttons}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.priceText}>
                                R$ {this.props.total.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                    </View>
                </View>
            </View >
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
        backgroundColor: 'white'
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
        fontFamily: CommonStyles.fontFamily
    },
    priceText: {
        fontFamily: CommonStyles.fontFamily,
    }
})