/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';

// async function User() {
//     // const newReference = database()
//     //     .ref(`/users/${userId}`)
//     //     .push()
//     // console.log('Auto generated key: ', newReference);
//     try {
//         const value = await AsyncStorage.getItem('userData');
//         if (value !== null) {
//           // We have data!!
//           console.log(JSON.parse(value));
//         }
//       } catch (error) {
//         // Error retrieving data
//       }
// }

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
                    onPress={() => props.postPedido(props.user, props.cardapio)}
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
