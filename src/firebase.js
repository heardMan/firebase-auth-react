// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKvlRX28DSDyKNk3PdExWE3tC9IPHjGD8",
  authDomain: "fir-auth-react-854f7.firebaseapp.com",
  projectId: "fir-auth-react-854f7",
  storageBucket: "fir-auth-react-854f7.appspot.com",
  messagingSenderId: "623775995137",
  appId: "1:623775995137:web:99cdb569ccfe6b4e81f700",
  measurementId: "G-P390EK4SPB"
};

// Initialize Firebase
const APP = initializeApp(firebaseConfig);
//const analytics = getAnalytics(APP);
export const AUTH = getAuth(APP);
export const DB = getDatabase(APP);
export default APP;