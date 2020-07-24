/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import cardapio from './reducers/Cardapio'

const reducers = combineReducers({
    cardapio: cardapio,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig
