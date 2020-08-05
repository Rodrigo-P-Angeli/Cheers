/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { USER_LOGGING, USER_LOGOUT, USER_SET_CEP, USER_SET_NUMERO, USER_SET_CIDADE, USER_SET_COMPLEMENTO, USER_SET_BAIRRO, USER_SET_RUA } from '../ActionsTypes'

const initialState = {
    endereco: {
        CEP: '',
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
        case USER_SET_CEP:
            return {
                ...state,
                endereco: {
                    ...state.endereco,
                    CEP: action.payload.text
                }
            }
        case USER_SET_CIDADE:
            return {
                ...state,
                endereco: {
                    ...state.endereco,
                    cidade: action.payload.text
                }
            }
            case USER_SET_NUMERO:
            return {
                ...state,
                endereco: {
                    ...state.endereco,
                    numero: action.payload.text
                }
            }
            case USER_SET_COMPLEMENTO:
            return {
                ...state,
                endereco: {
                    ...state.endereco,
                    complemento: action.payload.text
                }
            }
            case USER_SET_BAIRRO:
            return {
                ...state,
                endereco: {
                    ...state.endereco,
                    bairro: action.payload.text
                }
            }
            case USER_SET_RUA:
            return {
                ...state,
                endereco: {
                    ...state.endereco,
                    rua: action.payload.text
                }
            }
        default:
            return state
    }
}
export default reducer
