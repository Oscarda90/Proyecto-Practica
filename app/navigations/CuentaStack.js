import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cuenta from '../screens/Cuenta/Cuenta';
import Login from '../screens/Cuenta/Login';
import Registro from '../screens/Cuenta/Registro';

const Stack = createStackNavigator();

export default function CuentaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="cuenta"
                component={Cuenta}
                options={{ title: "Mi Cuenta" }}
            />
            <Stack.Screen 
                name="login"
                component={Login}
                options={{ title: "Iniciar Sesión" }}
            />
            <Stack.Screen 
                name="registro"
                component={Registro}
                options={{ title: "Registro" }}
            />
        </Stack.Navigator>
    )
}