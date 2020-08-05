/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import auth from '@react-native-firebase/auth'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MenuDrawer from './components/MenuDrawer'
import Cardapio from './screens/Cardapio'
import DadosCliente from './screens/DadosCliente'
import ClienteFidelidade from './screens/ClienteFidelidade';
import Login from './screens/Login'
import SplashScreen from './screens/SplashScreen';
import { connect } from 'react-redux';

import { onGoogleButtonPress, logout, loadUser, userSignIn } from './store/actions/user'
import PedidosRealizados from './screens/PedidosRealizados';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const initialState = {
    isSinedIn: false,
    isLoading: true,
}

class BottomTab extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Cardápio" backBehavior={'initialRoute'} tabBarOptions={tabBar}>
                <Tab.Screen
                    name="Cardápio"
                    component={Cardapio}
                    options={{
                        tabBarLabel: 'Cardápio',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="beer" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Dados do Cliente"
                    component={DadosCliente}
                    options={{
                        tabBarLabel: 'Dados do Cliente',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="person" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        )
    }
}

class AppDrawer extends Component {
    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Cardapio"
                drawerContent={props => <MenuDrawer {...props} onSignOut={this.props.onSignOut} />}
                drawerContentOptions={drawerOptions}
                backBehavior={'initialRoute'}>
                <Drawer.Screen name="Cardapio" component={BottomTab} backBehavior={'none'} />
                <Drawer.Screen name="Plano Fidelidade" component={ClienteFidelidade} backBehavior={'initialRoute'} />
                <Drawer.Screen name="Pedidos Realizados" component={PedidosRealizados} backBehavior={'initialRoute'} />
            </Drawer.Navigator>
        )
    }
}

class App extends Component {
    componentDidMount = async () => {
        // let user = null
        // try {
        //     user = await auth().currentUser
        //     this.props.userSignIn(user)
        // } catch (e) {
        //     console.log(e)
        // }
        await this.props.loadUser()
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    {/* <Stack.Screen name="SplashScreen">
                        {() => <SplashScreen loadUser={this.props.loadUser} {...this.props} />}
                    </Stack.Screen> */}
                    {this.props.user ?
                        <Stack.Screen name="Cardápio">
                            {() => <AppDrawer onSignOut={() => this.props.logout()} />}
                        </Stack.Screen> :
                        <Stack.Screen name="Login" >
                            {() => <Login {...this.props} loadUser={this.props.onGoogleButtonPress} />}
                        </Stack.Screen>}
                </Stack.Navigator>
                {/* {
                    this.props.user && this.props.userToken ?
                        <Stack.Navigator headerMode="none">
                            <Stack.Screen name="Cardápio">
                                {() => <AppDrawer onSignOut={() => this.props.logout()} />}
                            </Stack.Screen>
                        </Stack.Navigator>
                        :
                        <Stack.Navigator headerMode="none">
                            <Stack.Screen name="Login" >
                                {() => <Login {...this.props} loadUser={this.props.onGoogleButtonPress} />}
                            </Stack.Screen>
                        </Stack.Navigator>
                } */}
            </NavigationContainer >
        )
    }
}


const mapStateToProps = ({ user }) => {
    return {
        user: user.user,
        userToken: user.userToken
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGoogleButtonPress: () => dispatch(onGoogleButtonPress()),
        loadUser: () => dispatch(loadUser()),
        userSignIn: (user) => dispatch(userSignIn(user)),
        logout: () => dispatch(logout()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)



const drawerOptions = {
    labelStyle: {
        //fontFamily: 'Solway-Light',
        fontSize: 20,
    },
    activeTintColor: '#841584',
    //inactiveTintColor: '#679A7A',
}


const tabBar = {
    activeTintColor: '#841584',
    //inactiveTintColor: '#679A7A',
    labelStyle: {
        //fontFamily: 'Solway-Light',
        fontSize: 15,
    },
}
