// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO → replace with your own project’s values from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyA4DTDrrQwaiAH2RvU7wDaPrJqVepOJqY0",
  authDomain: "ucvibe-web.firebaseapp.com",
  projectId: "ucvibe-web",
  storageBucket: "ucvibe-web.firebasestorage.app",
  messagingSenderId: "1088415241347",
  appId: "1:1088415241347:web:6ce4aef59a4d0a036677b6",
  measurementId: "G-6YBS7RQPFJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
