/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default props => {
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
                    //onPress={this.finalizaPedido}
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