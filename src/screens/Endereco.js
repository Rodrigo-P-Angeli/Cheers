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

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

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
            <View style={styles.container}>
                {/* <ImageBackground style={styles.container} source={require('../../assets/images/BackGroundBody.jpg')}> */}
                <Header {...this.props} />
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data);
                        console.log(details);
                    }}
                    getDefaultValue={() => {
                        return ''; // text input default value
                    }}
                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'YOUR API KEY',
                        language: 'en', // language of the results
                        types: '(cities)', // default: 'geocode'
                    }}
                    styles={{
                        description: {
                            fontWeight: 'bold',
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                    }}
                    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    currentLocationLabel='Current location'
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={
                        {
                            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                        }
                    }
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'food',
                    }}
                    GooglePlacesDetailsQuery={{
                        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                        fields: 'formatted_address',
                    }}
                    filterReverseGeocodingByTypes={[
                        'locality',
                        'administrative_area_level_3',
                    ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    predefinedPlaces={[homePlace, workPlace]}
                    predefinedPlacesAlwaysVisible={true}
                />
                {/* </ImageBackground> */}
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
