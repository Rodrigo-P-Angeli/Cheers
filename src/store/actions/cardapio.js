/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { LOAD_CARDAPIO, SET_MORE } from '../ActionsTypes'
import database from '@react-native-firebase/database'

export const loadCardapio = () => {
    return async (dispatch, getState) => {
        if (!getState().cardapioo) {
            try {
                await database().ref('cardapio').on('value', snapshot => {
                    const itens = snapshot.val()
                    dispatch(setCardapio(itens))
                })
            }
            catch (err) {
                console.log(err)
            }
        } else {
            return
        }

    }
}

export const setCardapio = posts => {
    return {
        type: LOAD_CARDAPIO,
        payload: posts,
    }
}

export const setMore = (id) => {
    return {
        type: SET_MORE,
        payload: {
            id: id,
        },
    }
}

