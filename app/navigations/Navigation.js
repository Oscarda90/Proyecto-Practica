import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import CuentaStack from './CuentaStack';
import BuscarStack from './BuscarStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="cuenta"
                tabBarOptions={{
                    inactiveTintColor: "#646464",
                    activeTintColor: "#00a680",
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
            >
                <Tab.Screen name="home" component={HomeStack} />
                <Tab.Screen name="cuenta" component={CuentaStack} />
                <Tab.Screen name="buscar" component={BuscarStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "home":
            iconName="compass-outline"
            break;
        case "cuenta":
            iconName="account-heart-outline"
            break;
        case "buscar":
            iconName="magnify"
            break;
        default:
            break;
    }
    return (
        <Icon 
        type="material-community"
        name={iconName} 
        size={22} 
        color={color} />
    )
}