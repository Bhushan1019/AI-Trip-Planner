// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV8Y5O8ZpfRg5XzT7kJ2OxWs2_-gLaiUo",
  authDomain: "trip-planner-7c843.firebaseapp.com",
  projectId: "trip-planner-7c843",
  storageBucket: "trip-planner-7c843.appspot.com",
  messagingSenderId: "628646811533",
  appId: "1:628646811533:web:518160fb96e7721ff5cfc4",
  measurementId: "G-FVKPZ1T6CH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
