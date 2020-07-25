/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { SET_TOTAL, SET_MORE, SET_LESS } from '../ActionsTypes'

const initialState = {
    total: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL:
            return {
                ...state,
                total: action.payload,
            }
        case SET_MORE:
            return {
                ...state,
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
