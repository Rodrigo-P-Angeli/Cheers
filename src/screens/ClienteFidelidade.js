/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'

import Header from '../components/Header'
import CommonStyles from '../CommonStyles';
import Pack from '../../assets/images/Pack.jpg'
import { connect } from 'react-redux'


class ClienteFidelidade extends Component {
    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/BackGroundBody.jpg')}>
                <Header {...this.props} />
                <View style={styles.container}>
                    <View>
                        <Text style={styles.subtitle}>A cada R$ 100,00 em compras você ganha libera um espaço</Text>
                        <Text style={styles.subtitle}>Completando o Pack você recebe na próxima compra</Text>
                    </View>
                    <View style={styles.aline}>
                        <ImageBackground style={styles.image} source={Pack}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={[styles.fdsa, this.props.fidelidade >= 1 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>1</Text>
                                </View>
                                <View style={[styles.fdsa, this.props.fidelidade >= 2 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>2</Text>
                                </View>
                                <View style={[styles.fdsa, this.props.fidelidade >= 3 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>3</Text>
                                </View>
                                <View style={[styles.fdsa, this.props.fidelidade >= 4 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>4</Text>
                                </View>
                                <View style={[styles.fdsa, this.props.fidelidade >= 5 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>5</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={[styles.fdsa, this.props.fidelidade >= 6 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>6</Text>
                                </View>
                                <View style={[styles.fdsa, this.props.fidelidade >= 7 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>7</Text>
                                </View>
                                <View style={[styles.fdsa, this.props.fidelidade >= 8 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>8</Text>
                                </View>
                                <View style={[styles.fdsa, this.props.fidelidade >= 9 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>9</Text>
                                </View>
                                <View style={[styles.fdsa, this.props.fidelidade >= 10 ? styles.ganhado : null]}>
                                    <Text style={styles.text}>10</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        margin: 20,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        alignContent: 'center',
        justifyContent: 'center',
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
        //justifyContent: 'center',
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
        fontFamily: CommonStyles.fontFamily,
        color: 'white'
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontFamily: CommonStyles.fontFamily,
    },
})

const mapStateToProps = ({ user }) => {
    return ({
        user: user.user,
        fidelidade: user.fidelidade
    })
}
export default connect(mapStateToProps)(ClienteFidelidade)