/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { USER_LOGGING, USER_LOGOUT } from '../ActionsTypes'

const initialState = {
    endereco: {
        estado: 'ES',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        complemento: '',
    },
    user: null,
    userToken: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGING:
            return {
                ...state,
                user: action.payload.user,
                userToken: action.payload.idToken,
            }
        case USER_LOGOUT:
            return {
                ...initialState,
            }
        default:
            return state
    }
}
export default reducer
