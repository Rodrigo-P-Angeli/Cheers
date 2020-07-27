/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack'

import Cardapio from './screens/Cardapio'
import DadosCliente from './screens/DadosCliente'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();


class BottomTab extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Perfil" backBehavior={'initialRoute'}>
                <Tab.Screen
                    name="Cardápio"
                    component={Cardapio}
                // options={{
                //     tabBarLabel: 'Perfil',
                //     tabBarIcon: ({ color, size }) => (
                //         <Fontisto name="person" color={color} size={size} />
                //     ),
                // }}
                />
                <Tab.Screen
                    name="Dados do Cliente"
                    component={DadosCliente}
                // options={{
                //     tabBarLabel: 'Conhecimentos',
                //     tabBarIcon: ({ color, size }) => (
                //         <MaterialIcons name="all-inclusive" color={color} size={size} />
                //     ),
                // }} 
                />
                {/* <Tab.Screen
                name="Experiêcias"
                component={Experience}
            // options={{
            //     tabBarLabel: 'Experiêcias',
            //     tabBarIcon: ({ color, size }) => (
            //         <MaterialIcons name="work" color={color} size={size} />
            //     ),
            // }}
            />
            <Tab.Screen
                name="Formação Acadêmica"
                component={Formacao}
            // options={{
            //     tabBarLabel: 'Formação',
            //     tabBarIcon: ({ color, size }) => (
            //         <FontAwesome5 name="book-reader" color={color} size={size} />
            //     ),
            // }}
            /> */}
            </Tab.Navigator>
        )
    }
}

class AppDrawer extends Component {
    render() {
        return (
            <Drawer.Navigator
                initialRouteName='CV'
                //drawerContent={props => <MenuDrawer {...props} />}
                drawerContentOptions={drawerOptions}
                backBehavior={'initialRoute'}>
                <Drawer.Screen name="Cardapio" component={BottomTab} backBehavior={'none'} />
            </Drawer.Navigator>
        )
    }
}

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <AppDrawer />
            </NavigationContainer>
        )
    }
}
export default App



const drawerOptions = {
    labelStyle: {
        //fontFamily: 'Solway-Light',
        fontSize: 20,
    },
    //activeTintColor: '#005131',
    //inactiveTintColor: '#679A7A',
}


const tabBar = {
    activeTintColor: '#005131',
    inactiveTintColor: '#679A7A',
    labelStyle: {
        fontFamily: 'Solway-Light',
        fontSize: 10,
    },
}
