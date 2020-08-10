import React, { useState, useEffect } from 'react';
import UsuarioLogueado from './UsuarioLogueado';
import UsuarioInvitado from './UsuarioInvitado';
import * as firebase from 'firebase';
import Loading from '../../components/Loading';

export default function Cuenta() {
    // estado para el login
    const [login, setLogin] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
           
            !user ? setLogin(false) : setLogin(true);
        });
    }, []);

    if (login === null) return <Loading isVisible={true} text="Cargando..." />

    return login ? <UsuarioLogueado /> : <UsuarioInvitado />;
}