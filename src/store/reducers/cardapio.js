/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { LOAD_CARDAPIO } from '../ActionsTypes'

const initialState = {
    cardapio: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDAPIO:
            return {
                ...state,
            }
        default:
            return state
    }
}
export default reducer
