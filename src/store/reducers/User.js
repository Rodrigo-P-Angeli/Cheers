/* eslint-disable prettier/prettier */
/* eslint-disable semi */

//import { } from '../ActionsTypes'

const initialState = {
    endereco: {
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        complemento: '',
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /* case LOAD_CARDAPIO:
            return {
                ...state,
            }
        case SET_MORE:
            return {
                ...state,
            }
        case SET_LESS:
            return {
                ...state,
            }
        case SET_QT:
            return {
                ...state,
            }
        case SET_TOTAL_ITEM:
            return {
                ...state,
            }
        case SET_MAJOR_TOTAL:
            return {
                ...state,
            } */
        default:
            return state
    }
}
export default reducer
