// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo9_SlU7Sso8eeuZSGFN1Mpja04w-jX2Q",
  authDomain: "portfolioauth-5588f.firebaseapp.com",
  projectId: "portfolioauth-5588f",
  storageBucket: "portfolioauth-5588f.appspot.com",
  messagingSenderId: "544424920099",
  appId: "1:544424920099:web:dd2bf7a6aa80bb50c59d96",
  measurementId: "G-8T476T2YCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
