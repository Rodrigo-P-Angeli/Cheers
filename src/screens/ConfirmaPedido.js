import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';

import Header from '../components/Header'
import ItemPedido from '../components/ItemPedido'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../CommonStyles';
import Moment from 'moment'

const initialState = {
    pedidos: []
}

export default class PedidosRealizados extends Component {
    state = {
        ...initialState
    }

    render() {
        return (
            <View>
                <Header {...this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})