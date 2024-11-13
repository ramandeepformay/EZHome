// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "ezhome-b0520.firebaseapp.com",
    projectId: "ezhome-b0520",
    storageBucket: "ezhome-b0520.firebasestorage.app",
    messagingSenderId: "1079026968468",
    appId: "1:1079026968468:web:c474d168096c8a38695181"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);