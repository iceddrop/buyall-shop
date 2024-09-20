// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhJTH_a3-S81w7x5riPfvxHV2UgR9GRBg",
  authDomain: "buyall-5317d.firebaseapp.com",
  projectId: "buyall-5317d",
  storageBucket: "buyall-5317d.appspot.com",
  messagingSenderId: "272589182334",
  appId: "1:272589182334:web:a130fc7efc62abb8630f2f",
  measurementId: "G-6BTJ3E17KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);