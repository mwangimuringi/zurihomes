// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zurihomes-1.firebaseapp.com",
  projectId: "zurihomes-1",
  storageBucket: "zurihomes-1.firebasestorage.app",
  messagingSenderId: "686284990919",
  appId: "1:686284990919:web:bdb37a39acfd119c07d1e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);