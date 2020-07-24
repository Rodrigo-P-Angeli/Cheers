/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { LOAD_CARDAPIO } from '../ActionsTypes'

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
                cardapioo: action.payload,
    }
        default:
return state
    }
}
export default reducer
