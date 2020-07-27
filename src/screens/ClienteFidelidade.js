/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import Header from '../components/Header'
import Pack from '../../assets/images/Pack.jpg'
import { connect } from 'react-redux'

const inicialState = {
    fidelidade: [],
}
class ClienteFidelidade extends Component {
    state = { ...inicialState }

    getFidelidade = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData')
            const user = JSON.parse(userData)
            this.setState({
                name: user.name,
                email: user.email,
                phone: user.phone,
                endereco: user.endereco,
                fidelidade: user.fidelidade,
            })
        } catch (e) {
            console.log(e)
        }
    }
    mudarTab = () => {
        if (this.state.name == null) {
            this.getFidelidade()
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Header {...this.props} />
                    {this.mudarTab()}
                    <Text style={styles.subtitle}>A cada R$ 100,00 em compras você ganha libera um espaço</Text>
                    <Text style={styles.subtitle}>Completando o Pack você recebe na próxima compra</Text>
                </View>
                <View style={styles.aline}>
                    <View style={styles.container}>
                        <ImageBackground style={styles.image} source={Pack}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={[styles.fdsa, this.state.fidelidade >= 1 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>1</Text>
                                </View>
                                <View style={[styles.fdsa, this.state.fidelidade >= 2 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>2</Text>
                                </View>
                                <View style={[styles.fdsa, this.state.fidelidade >= 3 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>3</Text>
                                </View>
                                <View style={[styles.fdsa, this.state.fidelidade >= 4 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>4</Text>
                                </View>
                                <View style={[styles.fdsa, this.state.fidelidade >= 5 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>5</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={[styles.fdsa, this.state.fidelidade >= 6 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>6</Text>
                                </View>
                                <View style={[styles.fdsa, this.state.fidelidade >= 7 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>7</Text>
                                </View>
                                <View style={[styles.fdsa, this.state.fidelidade >= 8 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>8</Text>
                                </View>
                                <View style={[styles.fdsa, this.state.fidelidade >= 9 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>9</Text>
                                </View>
                                <View style={[styles.fdsa, this.state.fidelidade >= 10 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>10</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
        alignContent: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    fdsa: {
        flex: 1,
        backgroundColor: 'rgba(150,150,150,0.9)',
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    aline: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    ganhado: {
        backgroundColor: 'rgba(150,150,150,0)',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
    },
})

const mapStateToProps = ({ user }) => {
    return ({
        user2: user.user,
    })
}
export default connect(mapStateToProps)(ClienteFidelidade)