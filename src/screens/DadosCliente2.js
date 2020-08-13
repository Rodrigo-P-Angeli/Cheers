import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, ImageBackground, Alert, Linking } from 'react-native'
import { connect } from 'react-redux'
import Header from '../components/Header';
import Foot from '../components/Foot'
import Cep from 'cep-promise'

import { onChangeCEP, onChangeCidade, onChangeBairro, onChangeComplemento, onChangeNumero, onChangeRua } from '../store/actions/user'
import CommonStyles from '../CommonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DadosCliente extends Component {
    buscaCep(cep) {
        Cep(cep)
            .then(endereco => {
                //this.props.onChangeCEP(endereco.cep)
                this.props.onChangeCidade(endereco.city)
                this.props.onChangeBairro(endereco.neighborhood)
                this.props.onChangeRua(endereco.street)
                this.props.onChangeNumero('')
                this.props.onChangeComplemento('')
            }).catch(e => Alert.alert('Ops!', 'CEP Não encontrado, por favor digite um CEP válido'))
    }
    render() {
        return (
            <ImageBackground
                source={require('../../assets/images/BackGroundBody.jpg')}
                style={styles.image} imageStyle={{ opacity: 0.5 }}>
                <View style={styles.container} >
                    <Header {...this.props} />
                    <ScrollView style={styles.scrollView}>
                        <View>
                            <Text style={styles.RodaPeTitulo}>
                                Preencher endereco de entrega:
                        </Text>
                            <Text style={styles.desc}>CEP:</Text>
                            <TextInput
                                textAlign={'center'}
                                style={styles.textInput}
                                placeholder={'CEP'}
                                value={this.props.endereco.CEP}
                                onSubmitEditing={() => this.buscaCep(this.props.endereco.CEP)}
                                onChangeText={text => this.props.onChangeCEP(text)}
                                keyboardType={'numeric'}
                            />
                            <TouchableOpacity onPress={() => Linking.openURL('http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm')}>
                                <Text style={[styles.desc, { marginTop: 0, color: '#0000FF' }]}>Buscar CEP nos Correios</Text>
                            </TouchableOpacity>
                            <Text style={styles.desc}>Estado:</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={'Estado'}
                                value={this.props.endereco.estado}
                            />
                            <Text style={styles.desc}>Cidade:</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={'Vitória'}
                                value={this.props.endereco.cidade}
                                onChangeText={text => this.props.onChangeCidade(text)}
                            />
                            <Text style={styles.desc}>Bairro:</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={'Jardim da Penha'}
                                value={this.props.endereco.bairro}
                                onChangeText={text => this.props.onChangeBairro(text)}
                            />
                            <Text style={styles.desc}>Endereço:</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={'Nome da Avenida/Rua'}
                                value={this.props.endereco.rua}
                                onChangeText={text => this.props.onChangeRua(text)}
                            />
                            <Text style={styles.desc}>Número:</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={'N°'}
                                value={this.props.endereco.numero}
                                onChangeText={text => this.props.onChangeNumero(text)}
                                keyboardType={'numeric'}
                            />
                            <Text style={styles.desc}>Complemento:</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={'Apto/Bloco/ponto de referência...'}
                                value={this.props.endereco.complemento}
                                onChangeText={text => this.props.onChangeComplemento(text)}
                            />
                        </View>
                    </ScrollView>
                    <Foot {...this.props} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        borderColor: 'grey',
        borderBottomWidth: 1,
        textAlign: 'left',
        paddingBottom: 1,
        paddingTop: 1,
        fontFamily: CommonStyles.fontFamily,
    },
    RodaPeTitulo: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: CommonStyles.fontFamilyTitle,
    },
    container: {
        flex: 1,
        // backgroundColor: '#FFFFBF'
    },
    desc: {
        fontFamily: 'Roboto-Medium',//CommonStyles.fontFamilyTitle,
        color: '#666',
        marginTop: 10,
    },
    scrollView: {
        padding: 10,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
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
        onChangeCEP: (text) => dispatch(onChangeCEP(text)),
        onChangeCidade: (text) => dispatch(onChangeCidade(text)),
        onChangeBairro: (text) => dispatch(onChangeBairro(text)),
        onChangeRua: (text) => dispatch(onChangeRua(text)),
        onChangeNumero: (text) => dispatch(onChangeNumero(text)),
        onChangeComplemento: (text) => dispatch(onChangeComplemento(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DadosCliente)
