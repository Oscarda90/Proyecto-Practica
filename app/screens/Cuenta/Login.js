import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../../components/Cuenta/LoginForm';
import Toast from 'react-native-easy-toast';

export default function Login() {

    const toastRef = useRef();

    return (
        <ScrollView>
            <Image 
                source={require("../../../assets/img/healt.jpg")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <LoginForm 
                    toastRef={toastRef}
                />
                <CrearCuenta />
            </View>
            <Divider style={styles.divider} />
            <Toast 
                ref={toastRef}
                position="center"
                opacity={0.9}
            />
        </ScrollView>
    )
}

function CrearCuenta(props) {
    const navigation = useNavigation();

    return (
        <Text style={styles.texto}>
            ¿Aún no tienes una cuenta?{" "}
            <Text 
            style={styles.btnRegistro}
            onPress={() => navigation.navigate('registro')}
            >Registrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20,
    },
    viewContainer: {
        marginRight:40,
        marginLeft: 40,
    },
    texto: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    btnRegistro: {
        color: "#00a680",
        fontWeight: "bold",
    },
    divider: {
        backgroundColor: "#00a680",
        margin: 40,
    }
});