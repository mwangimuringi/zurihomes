import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfODzvAOBcHnW7JB_rIJRiaeGBer_1yHI",
  authDomain: "zurihomes-1.firebaseapp.com",
  projectId: "zurihomes-1",
  storageBucket: "zurihomes-1.firebasestorage.app",
  messagingSenderId: "686284990919",
  appId: "1:686284990919:web:bdb37a39acfd119c07d1e2",
};

const app = initializeApp(firebaseConfig);

export default app;