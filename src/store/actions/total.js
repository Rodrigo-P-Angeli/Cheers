/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { SET_TOTAL } from '../ActionsTypes'

export const setCardapio = total => {
    return {
        type: SET_TOTAL,
        payload: total,
    }
}
