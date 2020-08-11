/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import Header from '../components/Header';
import Foot from '../components/Foot'
import Cep from 'cep-promise'

import { onChangeCEP, onChangeCidade, onChangeBairro, onChangeComplemento, onChangeNumero, onChangeRua } from '../store/actions/user'
import CommonStyles from '../CommonStyles';

class DadosCliente extends Component {
    state = {
        endereco: {

        }
    }
    buscaCep(cep) {
        let endereco = {}
        Cep(cep)
            .then(endereco => this.setState({ endereco }))
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/BackGroundBody.jpg')}>
                <Header {...this.props} />
                <ScrollView>
                    <View>
                        <Text style={styles.RodaPeTitulo}>
                            Preencher endereco de entrega:
                        </Text>
                        <View flexDirection={'row'}>
                            <View flex={2} style={styles.sView}>
                                <Text style={styles.desc}>Estado:</Text>
                                <TextInput
                                    title={'Digite seu endereço'}
                                    style={styles.textInput}
                                    placeholder={'Estado'}
                                    value={this.state.endereco.state}
                                    textAlign={'center'}
                                />
                            </View>
                            <View style={styles.sView} flex={4}>
                                <Text style={styles.desc}>CEP:</Text>
                                <TextInput
                                    textAlign={'center'}
                                    style={styles.textInput}
                                    placeholder={'CEP'}
                                    value={`${this.state.cep}`}
                                    onSubmitEditing={() => this.buscaCep(this.state.cep)}
                                    onChangeText={text => this.setState({ cep: text })}
                                    // onChangeText={text => this.props.onChangeCEP(text)}
                                    keyboardType={'numeric'}
                                />
                            </View>
                        </View>
                        <View flexDirection={'row'}>
                            <View flex={2} style={styles.sView}>
                                <Text style={styles.desc}>Cidade:</Text>
                                <TextInput
                                    title={'Digite seu endereço'}
                                    style={styles.textInput}
                                    placeholder={'Vitória'}
                                    value={this.state.endereco.city}
                                    onChangeText={text => this.props.onChangeCidade(text)}
                                    textAlign={'center'}
                                />
                            </View>
                            <View style={styles.sView} flex={4}>
                                <Text style={styles.desc}>Bairro:</Text>
                                <TextInput
                                    textAlign={'center'}
                                    style={styles.textInput}
                                    placeholder={'Jardim da Penha'}
                                    value={this.props.endereco.bairro}
                                    onChangeText={text => this.props.onChangeBairro(text)}
                                />
                            </View>
                        </View>
                        <View flexDirection={'row'}>
                            <View flex={4} style={styles.sView}>
                                <Text style={styles.desc}>Endereço:</Text>
                                <TextInput
                                    title={'Digite seu endereço'}
                                    style={styles.textInput}
                                    placeholder={'Nome da Avenida/Rua'}
                                    value={this.props.endereco.rua}
                                    onChangeText={text => this.props.onChangeRua(text)}
                                />
                            </View>
                            <View style={styles.sView} flex={1}>
                                <Text style={styles.desc}>Número:</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={'N°'}
                                    value={this.props.endereco.numero}
                                    onChangeText={text => this.props.onChangeNumero(text)}
                                    keyboardType={'numeric'}
                                />
                            </View>
                        </View>
                        <View flexDirection={'row'}>
                            <View flex={4} style={styles.sView}>
                                <Text style={styles.desc}>Complemento:</Text>
                                <TextInput
                                    title={'Digite seu endereço'}
                                    style={styles.textInput}
                                    placeholder={'Apto/Bloco/...'}
                                    value={this.props.endereco.complemento}
                                    onChangeText={text => this.props.onChangeComplemento(text)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Foot {...this.props} />
            </ImageBackground>
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
        backgroundColor: 'white',
        fontFamily: CommonStyles.fontFamily,
    },
    RodaPeTitulo: {
        paddingTop: 20,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: CommonStyles.fontFamily,
    },
    sView: {
        margin: 10,
    },
    container: {
        flex: 1,
    },
    desc: {
        fontFamily: CommonStyles.fontFamily
    }
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
        onChangeCEP: (text) => dispatch(onChangeCEP(text)),
        onChangeCidade: (text) => dispatch(onChangeCidade(text)),
        onChangeBairro: (text) => dispatch(onChangeBairro(text)),
        onChangeRua: (text) => dispatch(onChangeRua(text)),
        onChangeNumero: (text) => dispatch(onChangeNumero(text)),
        onChangeComplemento: (text) => dispatch(onChangeComplemento(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DadosCliente)
