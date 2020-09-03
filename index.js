/**
 * @format
 */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import App from './src/Navigation';
import { Provider as StoreProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import storeConfig from './src/store/StoreConfig'

const store = storeConfig()

const theme = {
    ...DefaultTheme,
    roundness: 2,
    dark: true,
};

const Redux = () => {
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <App />
            </PaperProvider>
        </StoreProvider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);
