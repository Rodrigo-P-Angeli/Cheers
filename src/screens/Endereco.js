/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import Header from '../components/Header';
import Foot from '../components/Foot'
import Cep from 'cep-promise'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { onChangeCEP, onChangeCidade, onChangeBairro, onChangeComplemento, onChangeNumero, onChangeRua } from '../store/actions/user'
import CommonStyles from '../CommonStyles';

class Endereco extends Component {
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
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyByMXFjuIh-iA6BQQnv1d4PiqzDTqQkKD0',
                        language: 'en',
                    }}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Endereco)
