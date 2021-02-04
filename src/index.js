import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
//
import firebase from "firebase/app";
import "firebase/auth";

//const clientID = process.env.REACT_APP_UNSPLASH4GOD_API_KEY;

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
}

// const firebase = window.firebase.initializeApp(config);
//
// ReactDOM.render(
//     <>
//         <FirebaseContext.Provider value={{ firebase: window.firebase }}>
//             <GlobalStyles />
//             <App />
//         </FirebaseContext.Provider>
//     </>,
//     document.getElementById('root')
// );

//const firebase = window.firebase.initializeApp(config);
const Firebase = firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);
