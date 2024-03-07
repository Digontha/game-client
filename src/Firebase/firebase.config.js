// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANM_EBXp7jZCqq9P8Xvhh2TdZZsoRtGOc",
  authDomain: "game-enfield.firebaseapp.com",
  projectId: "game-enfield",
  storageBucket: "game-enfield.appspot.com",
  messagingSenderId: "170837276403",
  appId: "1:170837276403:web:6792739225d9f93254e986",
  measurementId: "G-4K01MX1VTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;