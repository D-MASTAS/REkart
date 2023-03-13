// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB98Q2re61aWUigFNJlvxsznyMBVy4RMvk",
  authDomain: "fir-auth-1-fd38d.firebaseapp.com",
  projectId: "fir-auth-1-fd38d",
  storageBucket: "fir-auth-1-fd38d.appspot.com",
  messagingSenderId: "30677215671",
  appId: "1:30677215671:web:6ac6b724f4b4852dbd2032",
  measurementId: "G-YNVW8NCQ5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};