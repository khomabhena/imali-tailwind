// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlWiT4D5Vr1ffuMfg-1Axv7bquFq4IArQ",
  authDomain: "imali-b4b46.firebaseapp.com",
  projectId: "imali-b4b46",
  storageBucket: "imali-b4b46.appspot.com",
  messagingSenderId: "285821071776",
  appId: "1:285821071776:web:200cf719210c81515fb4c5",
  measurementId: "G-432MZ46NZT"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
// const analytics = getAnalytics(app);