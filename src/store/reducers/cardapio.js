/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { LOAD_CARDAPIO, SET_MORE, SET_LESS } from '../ActionsTypes'

const initialState = {
    cardapioo: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDAPIO:
            return {
                ...state,
                cardapioo: action.payload.map((item) => {
                    if (item.total && item.quantidade) {
                        return (item)
                    } else {
                        item.total = 0
                        item.quantidade = 0
                        return (item)
                    }
                }),
            }
        case SET_MORE:
            return {
                ...state,
                cardapioo: state.cardapioo.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantidade = item.quantidade + 1
                    }
                    return item
                }),
            }
        case SET_LESS:
            return {
                ...state,
            }
        default:
            return state
    }
}
export default reducer
