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
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import storeConfig from './src/store/StoreConfig'

const store = storeConfig()
const fontConfig = {
    default: {
        regular: {
            fontFamily: 'Roboto-Medium',
        },
        light: {
            fontFamily: 'Roboto-Light',
        },
        bold: {
            fontFamily: 'Roboto-Bold',
        },
    },
};
const theme = {
    ...DefaultTheme,
    roundness: 2,
    dark: true,
    fonts: configureFonts(fontConfig),
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
