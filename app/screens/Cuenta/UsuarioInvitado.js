import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function UsuarioInvitado() {
    const navigation = useNavigation();

    return (
        <ScrollView centerContent={true} style={styles.ViewBody} >
            <Image 
            source={require("../../../assets/img/healt.jpg")}
            resizeMode="contain"
            style={styles.image}
            />
            <Text style={styles.descripcion}>
                Busca y encuentra los mejores especialistas de la salud de una forma rapida y reserva tu cita.
            </Text>
            <View style={styles.viewBtn}>
                <Button 
                    title="Inicia Sesión"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                   onPress={() => navigation.navigate('login')}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ViewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    descripcion: {
        textAlign: "center",
        marginBottom: 20,
    },
    viewBtn: {
        flex: 1,
        alignItems: "center",   
    },
    btnStyle: {
        backgroundColor: "#00a680",
    },
    btnContainer: {
        width: "70%",
    },
});