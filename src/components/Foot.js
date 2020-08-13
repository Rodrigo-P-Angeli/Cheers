import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import CommonStyles from '../CommonStyles'

export default props => {
    const checkPedido = () => {
        if (props.cardapio.filter(item => item.quantidade > 0) != 0) {
            if (props.endereco.rua) {
                return props.postPedido(props.user, props.cardapio, props.endereco, props.total)
            } else {
                props.navigation.navigate('Dados do Cliente')
                Alert.alert('Preencher endereço', 'Por favor, preencha seu endereço corretamente')
            }
        } else {
            //props.navigation.navigate('Dados do Cliente')
            Alert.alert('Cardapio vazio', 'Por favor, selecione seu pedido')
        }
    }
    return (
        <View style={styles.bottom} >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'space-between' }}>
                    <Text style={styles.texTotal}>Total:</Text>
                    <Text style={styles.texTotal}> R$:  </Text>
                </View>
                <View style={styles.containerTotal}>
                    <Text style={styles.total}>{props.total.toFixed(2).replace('.', ',')}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    onPress={checkPedido}
                    title={'Finalizar pedido'}
                    color={CommonStyles.Colors.buttons} />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        padding: 10,
        alignSelf: 'flex-end',
        backgroundColor: 'white'
    },
    containerTotal: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20,
    },
    total: {
        fontSize: 30,
        fontFamily: CommonStyles.fontFamilyTitle,
        textAlign: 'right'
    },
    texTotal: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 14,
    },
})
