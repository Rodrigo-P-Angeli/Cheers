import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, ImageBackground, FlatList } from 'react-native'
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';

import Header from '../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../CommonStyles';
import { postPedido } from '../store/actions/cardapio';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import ItemPedido from '../components/ItemPedido'

class ConfirmaPedido extends Component {

    render() {
        return (
            <ImageBackground source={require('../../assets/images/BackGroundBody.jpg')} style={styles.imageback}>
                <View>
                    <Header hidden={true} {...this.props} />
                    <View style={styles.container}>
                        <Text style={styles.title}>Finalizar pedido</Text>
                        <Text style={styles.subtitle}>Favor conferir todos os dados se estão corretos</Text>
                        <Text style={styles.endereco}>{this.props.endereco.rua}, n° {this.props.endereco.numero}, {this.props.endereco.bairro}, {this.props.endereco.cidade}, {this.props.endereco.estado}{this.props.endereco.complemento ? `, ${this.props.endereco.complemento}` : null}</Text>
                        <FlatList
                            style={styles.flatlist}
                            data={this.props.cardapio}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => item.quantidade > 0 ?
                                <ItemPedido {...item} />
                                : null}
                        />
                        <View style={styles.totalcontainer}><Text style={styles.Total}>R$ {this.props.total.toFixed(2).replace('.', ',')}</Text></View>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            activeOpacity={.6}
                            style={styles.finalizar}
                            onPress={() => {
                                this.props.postPedido(this.props.user, this.props.cardapio, this.props.endereco, this.props.total)
                                this.props.navigation.navigate('AppDrawer')
                            }}>
                            <FontAwesome name={'check'} size={50} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    imageback: {
        flex: 1,
        resizeMode: 'contain'
    },
    container: {
        margin: 30,
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: '90%',
        alignSelf: 'center',
        padding: 10,
    },
    finalizar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        fontFamily: CommonStyles.fontFamilyTitle
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 10,
        color: 'white',
        fontFamily: CommonStyles.fontFamily,
        marginTop: 10,
    },
    endereco: {
        fontSize: 20,
        color: 'white',
        fontFamily: CommonStyles.fontFamily
    },
    totalcontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Total: {
        marginTop: 10,
        borderColor: 'white',
        borderTopWidth: 1,
        fontSize: 20,
        textAlign: 'right',
        color: 'white',
        fontFamily: CommonStyles.fontFamilyTitle
    },
    flatlist: {
        marginTop: 30,
    }
})


const mapStateToProps = ({ cardapio, user }) => {
    return {
        cardapio: cardapio.cardapioo,
        total: cardapio.total,
        user: user.user,
        endereco: user.endereco,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postPedido: (user, pedido, endereco, total) => dispatch(postPedido(user, pedido, endereco, total)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmaPedido)