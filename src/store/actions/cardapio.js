/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { LOAD_CARDAPIO } from '../ActionsTypes'
import database from '@react-native-firebase/database'

export const loadCardapio = () => {
    return async (dispatch, getState) => {
        try {
            await database().ref('cardapio').on('value', snapshot => {
                const itens = snapshot.val()
                dispatch(setCardapio(itens))
            })
        }
        catch (err) {
            console.log(err)
        }

    }
}

export const setCardapio = posts => {
    return {
        type: LOAD_CARDAPIO,
        payload: posts,
    }
}


