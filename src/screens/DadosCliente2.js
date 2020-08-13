import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import Header from '../components/Header';
import Foot from '../components/Foot'
import Cep from 'cep-promise'

import { onChangeCEP, onChangeCidade, onChangeBairro, onChangeComplemento, onChangeNumero, onChangeRua } from '../store/actions/user'
import CommonStyles from '../CommonStyles';

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
            })
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/BackGroundBody.jpg')}>
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
        marginBottom: 15,
    },
    RodaPeTitulo: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: CommonStyles.fontFamilyTitle,
    },
    container: {
        flex: 1,
    },
    desc: {
        fontFamily: CommonStyles.fontFamilyTitle
    },
    scrollView: {
        padding: 10,
        //backgroundColor: 'white'
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
