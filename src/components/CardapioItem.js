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
                <View elevation={2} style={styles.containerOutside}>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: this.props.image }} />
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.marca}>{this.props.marca} {this.props.tipo}</Text>
                            <Text style={styles.priceText}>
                                R$ {this.props.price.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                        <View style={{ flex: .35 }}>
                            <View style={styles.setQuant}>
                                <View style={styles.buttons}>
                                    <TouchableOpacity onPress={() => this.props.setLess(this.props.id)}>
                                        <Text style={[styles.buttonsText,]}>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    textAlign={'center'}
                                    style={{ height: 40,width: 30,}}
                                    placeholder={'0'}
                                    value={this.props.quantidade.toString()}
                                    onChangeText={text => this.props.setqt(this.props.id, text)}
                                    keyboardType={'numeric'}
                                />
                                <View style={styles.buttons}>
                                    <TouchableOpacity onPress={() => this.props.setMore(this.props.id)}>
                                        <Text style={styles.buttonsText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonsMaisSeis}>
                                    <TouchableOpacity onPress={() => this.props.setMore(this.props.id, 6)}>
                                        <Text style={[styles.buttonsText, { color: '#555' }]}> +6 </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: .2, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.priceText}>
                                    R$
                            </Text>
                                <Text style={[styles.priceText, { flex: 1, textAlign: 'right', }]}>
                                    {this.props.total.toFixed(2).replace('.', ',')}
                                </Text>
                            </View>
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
        borderColor: CommonStyles.Colors.buttons,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 2,
        margin: 5,
    },
    containerOutside: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    desc: {
        flex: .7,
    },
    setQuant: {
        alignItems: 'center',
        flex: .2,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    buttons: {
        borderRadius: 10,
        borderWidth: 2,
        width: 20,
        height: 20,
        borderColor: CommonStyles.Colors.buttons,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsText: {
        color: CommonStyles.Colors.buttons,
        fontFamily: CommonStyles.fontFamilyTitle,
        textAlign: 'center',
        //borderWidth: 1,
        height: 20,
        width: 20,
    },
    marca: {
        fontSize: 20,
        fontFamily: CommonStyles.fontFamily
    },
    priceText: {
        fontFamily: CommonStyles.fontFamily,
        textAlign: 'justify',
    },
    imageContainer: {
        flex: .18,
    },
    image: {
        padding: 25,
        resizeMode: 'center',
    },
    buttonsMaisSeis: {
        borderRadius: 5,
        borderWidth: 2,
        width: 30,
        height: 20,
        borderColor: '#919191',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        backgroundColor: '#DEDEDE'
    },
})