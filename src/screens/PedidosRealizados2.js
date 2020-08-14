import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, ImageBackground, Dimensions, ColorPropType } from 'react-native'
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';

import Header from '../components/Header'
import ItemPedido from '../components/ItemPedido'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../CommonStyles';
import Moment from 'moment'
import { Accordion, Block } from 'galio-framework';

const initialState = {
    pedidos: []
}


class PedidosRealizados extends Component {
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        try {
            await database().ref('users').child(`${this.props.user.uid}/pedidos`).on('value',
                snapshot => {
                    let pedidos = snapshot.val() ? snapshot.val() : []
                    let pedidos2 = []
                    pedidos.forEach(async element => {
                        database().ref('pedidos').child(`${element}`).once('value').then(snapshot => {
                            let elemento = {
                                ...snapshot.val(),
                                numeroPedido: `${element}`,
                            }
                            pedidos2.push(elemento)
                            this.setState({ pedidos: pedidos2 })
                        })
                    })
                }
            )
        }
        catch (err) {
            console.log(err)
        }

    }

    render() {
        const data = this.state.pedidos.map((item) => {
            return {
                title: `${Moment(item.data).format('DD/MM/YYYY h:mm:ss a')}
Status: ${item.status}`,
                content: `N° do pedido: ${item.numeroPedido}\n
${item.endereco.rua}, n° ${item.endereco.numero}, ${item.endereco.bairro}, ${item.endereco.cidade}, ${item.endereco.estado} - ${item.endereco.complemento}\n
Total: ${item.total.toFixed(2).replace('.', ',')}
${item.pedido.map(item => `\n${item.marca} ${item.tipo} R$${item.price.toFixed(2).replace('.', ',')}........ x ${item.quantidade} un. = ${item.total.toFixed(2).replace('.', ',')}`)}`
            }
        }
        )
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/BackGroundBody.jpg')} >
                <Header {...this.props} />
                {this.state.pedidos.length ?
                    <ScrollView style={{ alignSelf: 'center', alignContent: 'center', marginTop: 20 }}>
                        <Accordion
                            contentStyle={styles.content}
                            headerStyle={styles.title}
                            style={{ backgroundColor: CommonStyles.Colors.buttons }}
                            listStyle={styles.text}
                            //expandedIcon={{color: 'white'}}
                            dataArray={data} />
                    </ScrollView>
                    :
                    <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text style={{
                            fontFamily: CommonStyles.fontFamilyTitle,
                            fontSize: 20,
                        }}>
                            Você ainda não possui nenhum pedido
                        </Text>
                    </View>}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: CommonStyles.Colors.buttons,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        height: 100,
    },
    text: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 15,
        color: 'white'
    },
    content: {
        backgroundColor: 'white'
    },
    title: {
        backgroundColor: CommonStyles.Colors.buttons,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    }
})

const mapStateToProps = ({ user }) => {
    return {
        user: user.user,
    }
}

export default connect(mapStateToProps)(PedidosRealizados)