/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Header from '../components/Header';
import Foot from '../components/Foot'

class DadosCliente extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView>
                    <View>
                        <Text style={styles.RodaPeTitulo}>
                            Preencher endereco de entrega:
                        </Text>
                        <View flexDirection={'row'}>
                            <View flex={2} style={styles.sView}>
                                <Text>Estado:</Text>
                                <TextInput
                                    title={'Digite seu endereço'}
                                    style={styles.textInput}
                                    placeholder={'Estado'}
                                    value={this.props.estado}
                                    textAlign={'center'}
                                />
                            </View>
                            <View style={styles.sView} flex={4}>
                                <Text>CEP:</Text>
                                <TextInput
                                    textAlign={'center'}
                                    style={styles.textInput}
                                    placeholder={'CEP'}
                                    value={this.props.CEP}
                                //onChangeText={text => this.props.onChangeCEP(text)}
                                />
                            </View>
                        </View>
                        <View flexDirection={'row'}>
                            <View flex={2} style={styles.sView}>
                                <Text>Cidade:</Text>
                                <TextInput
                                    title={'Digite seu endereço'}
                                    style={styles.textInput}
                                    placeholder={'Vitória'}
                                    value={'Vitória'}
                                    textAlign={'center'}
                                />
                            </View>
                            <View style={styles.sView} flex={4}>
                                <Text>Bairro:</Text>
                                <TextInput
                                    textAlign={'center'}
                                    style={styles.textInput}
                                    placeholder={'Jardim da Penha'}
                                    value={this.props.bairro}
                                //onChangeText={text => this.props.onChangeBairro(text)}
                                />
                            </View>
                        </View>
                        <View flexDirection={'row'}>
                            <View flex={4} style={styles.sView}>
                                <Text>Endereço:</Text>
                                <TextInput
                                    title={'Digite seu endereço'}
                                    style={styles.textInput}
                                    placeholder={'Nome da Avenida/Rua'}
                                    value={this.props.rua}
                                //onChangeText={text => this.props.onChangeRua(text)}
                                />
                            </View>
                            <View style={styles.sView} flex={1}>
                                <Text>Número:</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={'N°'}
                                    value={this.props.numero}
                                    //onChangeText={text => this.props.onChangeNumero(text)}
                                    keyboardType={'numeric'}
                                />
                            </View>
                        </View>
                        <View flexDirection={'row'}>
                            <View flex={4} style={styles.sView}>
                                <Text>Complemento:</Text>
                                <TextInput
                                    title={'Digite seu endereço'}
                                    style={styles.textInput}
                                    placeholder={'Apto/Bloco/...'}
                                    value={this.props.complemento}
                                //onChangeText={text => this.props.onChangeComplemento(text)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Foot {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        borderRadius: 10,
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        textAlign: 'center',
    },
    RodaPeTitulo: {
        paddingTop: 20,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    sView: {
        margin: 10,
    },
    container: {
        flex: 1,
    },
})

const mapStateToProps = ({ cardapio, user }) => {
    return {
        cardapio: cardapio.cardapioo,
        total: cardapio.total,
        endereco: user.endereco,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onLoadScreen: () => dispatch(loadCardapio()),
        // onSetMore: (id) => dispatch(setMore(id)),
        // onSetLess: (id) => dispatch(setLess(id)),
        // onSetQt: (id, text) => dispatch(setQuantidade(id, text)),
    }
}

export default connect(mapStateToProps)(DadosCliente)
