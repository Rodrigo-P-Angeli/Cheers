/**
 * @format
 */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import App from './src/App';
import { Provider } from 'react-redux'
import storeConfig from './src/store/StoreConfig'

const store = storeConfig()

const Redux = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);
