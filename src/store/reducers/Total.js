/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { SET_TOTAL } from '../ActionsTypes'

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
        case SET_TOTAL:
            return {
                ...state,
                    
                }),
            }
        default:
            return state
    }
}
export default reducer
