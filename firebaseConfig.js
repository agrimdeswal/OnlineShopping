import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpGe61DUmA24_5h7GguWizoN8wXDGgVfA",
    authDomain: "e-commerce-1af10.firebaseapp.com",
    projectId: "e-commerce-1af10",
    storageBucket: "e-commerce-1af10.appspot.com",
    messagingSenderId: "12734488345",
    appId: "1:12734488345:web:ca2b66352760971b182f88",
    measurementId: "G-LL6BPQKRR2"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

