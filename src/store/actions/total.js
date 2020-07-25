/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { SET_TOTAL, SET_ITEM_TOTAL } from '../ActionsTypes'

export const setTotal = total => {
    return {
        type: SET_TOTAL,
        payload: total,
    }
}

export const setItemTotal = (id, qt, total) => {
    return {
        type: SET_ITEM_TOTAL,
        payload: {
            id,
            qt,
            total,
        },
    }
}

export const calcTotalItem = (id, qt, valor) => {
    const total = qt * valor
    return (dispatch) => {
        dispatch(setItemTotal(id, qt, total))
    }
}
