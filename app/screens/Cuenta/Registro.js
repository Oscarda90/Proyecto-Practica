import React, { useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import FormularioReg from '../../components/Cuenta/FormularioReg';

export default function Registro() {
    const toastRef = useRef();

    return (
        <KeyboardAwareScrollView>
            <Image 
                source={require("../../../assets/img/healt.jpg")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.formulario}>
                <FormularioReg toastRef={toastRef} />
            </View>
            <Toast ref={toastRef} position="center" opacity={0.9} />
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20,
    },
    formulario: {
        marginRight: 40,
        marginLeft: 40,
    },
});