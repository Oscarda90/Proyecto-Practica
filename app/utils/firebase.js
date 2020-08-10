import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDS0iOYtHfevJdZTFm_a1bu4c9-MGUjR0Q",
    authDomain: "mediplus-2e57c.firebaseapp.com",
    databaseURL: "https://mediplus-2e57c.firebaseio.com",
    projectId: "mediplus-2e57c",
    storageBucket: "mediplus-2e57c.appspot.com",
    messagingSenderId: "389466199584",
    appId: "1:389466199584:web:28489e20d7019bcb6c0e45"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);