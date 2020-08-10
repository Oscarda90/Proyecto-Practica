import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import Loading from '../Loading';
import { validarEmail } from '../../utils/validaciones';
import { size, isEmpty } from 'lodash';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function FormularioReg(props) {
    
    const { toastRef } = props;
    //estado para mostrar contraseña
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());

    //estado para loading
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const onSubmit = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)) {
            toastRef.current.show('Todos los campos son obligatorios');
        } else if(!validarEmail(formData.email)) {
            toastRef.current.show('El email no es correcto');
        } else if(formData.password !== formData.repeatPassword){
            toastRef.current.show('Las contraseñas tiene que ser iguales');
        } else if(size(formData.password) < 6){
            toastRef.current.show('La contraseña tiene que tener al menos 6 caracteres');
        } else {
            setLoading(true);
            firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
                    .then(resp => {
                        setLoading(false);
                        navigation.navigate('cuenta')
                    })
                    .catch(() => {
                        setLoading(false);
                        toastRef.current.show("El email ya esta en uso, pruebe con otro");
                    });
        }
    };

    const onChange = (e, type) => {
        setFormData({ 
            ...formData,
            [type]: e.nativeEvent.text 
        });
    };

    return (
        <View style={styles.formContainer}>
            <Input 
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange={e => onChange(e, "email")}
                rightIcon={
                    <Icon
                        type="material-community"
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
                onChange={e => onChange(e, "password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={ showPassword ? "eye-off-outline" : "eye-outline" }
                        iconStyle={styles.iconRigth}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input 
                placeholder="Repetir contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={ showRepeatPassword ? false : true }
                onChange={e => onChange(e, "repeatPassword")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={ showRepeatPassword ? "eye-off-outline" : "eye-outline" }
                        iconStyle={styles.iconRigth}
                        onPress={() => setShowRepeatPassword(!showRepeatPassword)}
                    />
                }
            />
            <Button 
                title="Registrarse"
                containerStyle={styles.btnRegistro}
                buttonStyle={styles.btnStyles}
                onPress={onSubmit}
            />
            <Loading 
                isVisible={loading}
                text="Creando cuenta"
            />
        </View>
    )
}

function defaultFormValue() {
    return {
        email: '',
        password: '',
        repeatPassword: ''
    };
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
    btnRegistro: {
        marginTop: 20,
        width: "95%"
    },
    btnStyles: {
        backgroundColor: "#00a680"
    },
    iconRigth: {
        color: "#c1c1c1",
    },
});