/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { LOAD_CARDAPIO } from '../ActionsTypes'
import { and } from 'react-native-reanimated'

const initialState = {
    cardapioo: [
        // {
        //     id: 0,
        //     marca: 'asdfdg',
        // },
        // {
        //     id: 1,
        //     marca: 'afg',
        // },
    ],
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
        default:
            return state
    }
}
export default reducer
