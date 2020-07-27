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
            } */
        default:
            return state
    }
}
export default reducer
