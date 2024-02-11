// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "inmobiliaria-1dcc2.firebaseapp.com",
  projectId: "inmobiliaria-1dcc2",
  storageBucket: "inmobiliaria-1dcc2.appspot.com",
  messagingSenderId: "545378929302",
  appId: "1:545378929302:web:01175999e16f5dfa9e50b7",
  measurementId: "G-CQ94N6WNXY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
