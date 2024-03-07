// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuA2ulzwhdLY8GGELYRr2HxOQ444GNKZ0",
  authDomain: "logintemplate-8b8e2.firebaseapp.com",
  projectId: "logintemplate-8b8e2",
  storageBucket: "logintemplate-8b8e2.appspot.com",
  messagingSenderId: "232649857426",
  appId: "1:232649857426:web:c6136fadb22b12ca1d494b",
  measurementId: "G-K2GCG8NX8S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

