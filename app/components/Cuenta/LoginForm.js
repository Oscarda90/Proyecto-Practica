import React, { useState } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { isEmpty } from 'lodash';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import { validarEmail } from '../../utils/validaciones';
import Loading from '../Loading';

export default function LoginForm({toastRef}) {
    // state para mostrara u ocultar contraseña
    const [showPassword, setShowPassword] = useState(false);
    // state para guardar valores del formulario de login
    const [formData, setFormData] = useState(defaultFormValue());
    // estado para Loading...
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    // funcion actualiza el estado de los valores del formulario
    const onChange = (e, type) => {
        setFormData({
            ...formData,
            [type]: e.nativeEvent.text
        });
    };

    const onSubmit = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password)) {
            toastRef.current.show("Todos los campos son obligatorios");
        } else if (!validarEmail(formData.email)) {
            toastRef.current.show("El email no es correcto");
        } else {
            setLoading(true);
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
                    .then(() => {
                        setLoading(false);
                        navigation.navigate("cuenta");
                    })
                    .catch(() => {
                        setLoading(false);
                        toastRef.current.show("Email o contraseña incorrectos");
                    });
        }
    };
    
    return (
        <View style={styles.formContainer}>
            <Input 
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange={(e) => onChange(e, "email")}
                rightIcon={
                    <Icon
                        type= "material-community"
                        name="at"
                        iconStyle={styles.iconRigth}
                    />
                }
            />
            <Input 
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={ showPassword ? false : true }
                onChange={(e) => onChange(e, "password")}
                rightIcon={
                    <Icon
                        type= "material-community"
                        name={ showPassword ? "eye-off-outline" : "eye-outline" }
                        iconStyle={styles.iconRigth}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button
                title="Iniciar Sesion"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
            />
            <Loading  
                isVisible={loading}
                text="Iniciando sesión"
            />
        </View>
    );
};

function defaultFormValue() {
    return {
        email: '',
        password: ''
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
    },
    btnContainer: {
        marginTop: 20,
        width: "95%",
    },
    btnLogin: {
        backgroundColor: "#00a680"
    },
    iconRigth: {
        color: "#c1c1c1"
    }
})