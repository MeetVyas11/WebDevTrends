// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrpzaE21q-Ltpg0kcc6SYAzqNb_SVrsg4",
  authDomain: "webdevtrends-f404a.firebaseapp.com",
  projectId: "webdevtrends-f404a",
  storageBucket: "webdevtrends-f404a.firebasestorage.app",
  messagingSenderId: "676244246188",
  appId: "1:676244246188:web:ccec796920d12ef5d1d909",
  measurementId: "G-6JPMEP4LV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);