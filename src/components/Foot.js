import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

export default props => {
    const checkPedido = () => {
        if (props.cardapio.filter(item => item.quantidade > 0) != 0) {
            props.postPedido(props.user, props.cardapio, props.endereco, props.total)
            return
        } else {
            Alert.alert('Cardapio vazio', 'Por favor, selecione seu pedido')
        }
    }
    return (
        <View style={styles.bottom} >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ flex: 2, justifyContent: 'space-between' }}>
                    <Text style={styles.texTotal}>Total:</Text>
                    <Text style={{ fontWeight: 'bold' }}> R$:  </Text>
                </View>
                <View style={styles.containerTotal}>
                    <Text style={styles.total}>{props.total.toFixed(2).replace('.', ',')}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    onPress={checkPedido}
                    title={'Finalizar pedido'}
                    color={'#841584'} />
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
    },
    containerTotal: {
        flex: 8,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
    },
    total: {
        fontWeight: 'bold',
        fontSize: 30,
    },
})
