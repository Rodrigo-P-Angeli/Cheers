/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native'
import CommonStyles from '../CommonStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ItemCardapio extends Component {
    render() {
        return (
            <View style={{ padding: 5, paddingBottom: 0 }}>
                <View style={styles.container} elevation={2}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: this.props.image }} />
                    </View>
                    <View style={styles.desc}>
                        <Text style={styles.marca}>{this.props.marca} {this.props.tipo}</Text>
                        <Text style={styles.priceText}>
                            R$ {this.props.price.toFixed(2).replace('.', ',')}
                        </Text>
                    </View>
                    <View style={styles.setQuant}>
                        <TouchableOpacity onPress={() => this.props.setLess(this.props.id)}>
                            <View style={styles.buttons}>
                                <Text style={styles.buttonsText}>-</Text>
                            </View>
                        </TouchableOpacity>
                        <TextInput
                            textAlign={'center'}
                            style={{ height: 40 }}
                            placeholder={'0'}
                            value={this.props.quantidade.toString()}
                            onChangeText={text => this.props.setqt(this.props.id, text)}
                            keyboardType={'numeric'}
                        />
                        <TouchableOpacity onPress={() => this.props.setMore(this.props.id)}>
                            <View style={styles.buttons}>
                                <Text style={styles.buttonsText}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: .2 }}>
                        <Text style={styles.priceText}>
                            R$ {this.props.total.toFixed(2).replace('.', ',')}
                        </Text>
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
        backgroundColor: 'white',
        flex: 1,
    },
    desc: {
        flex: .7,
    },
    setQuant: {
        //alignItems: 'center',
        flex: .3,
        //justifyContent: 'center',
        flexDirection: 'row',
    },
    buttons: {
        borderRadius: 10,
        borderWidth: 3,
        width: 20,
        height: 20,
        borderColor: CommonStyles.Colors.buttons,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsText: {
        color: CommonStyles.Colors.buttons,
        fontFamily: CommonStyles.fontFamilyTitle,
        fontSize: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    marca: {
        fontSize: 20,
        fontFamily: CommonStyles.fontFamily
    },
    priceText: {
        fontFamily: CommonStyles.fontFamily,
    },
    imageContainer: {
        flex: .18,
    },
    image: {
        padding: 25,
        resizeMode: 'center',
    },
})