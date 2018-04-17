import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyBKUQCVswpKWQgkfyfSW6OvN7szUWCB0Fg',
    authDomain: 'dcx-pronosticx.firebaseapp.com',
    databaseURL: 'https://dcx-pronosticx.firebaseio.com',
    projectId: 'dcx-pronosticx',
    storageBucket: '',
    messagingSenderId: '821338009259'
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;