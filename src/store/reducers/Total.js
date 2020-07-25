/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { SET_TOTAL } from '../ActionsTypes'

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
        default:
            return state
    }
}

export default reducer
