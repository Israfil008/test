import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM_FfjzjNxLgsxIWKONe5JF4wdoT-M-ro",
  authDomain: "pustaklink008.firebaseapp.com",
  projectId: "pustaklink008",
  storageBucket: "pustaklink008.firebasestorage.app",
  messagingSenderId: "647353066549",
  appId: "1:647353066549:web:6f54129c90ebc4a54afd7c",
  measurementId: "G-YSG4XW1KT1"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
