// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmzy9PwSf9lk4lXGnSV374DViyPFdO7Vw",
  authDomain: "react-chat-6f4e4.firebaseapp.com",
  projectId: "react-chat-6f4e4",
  storageBucket: "react-chat-6f4e4.appspot.com",
  messagingSenderId: "774460701654",
  appId: "1:774460701654:web:4ffa7638292d38f59d0277",
  measurementId: "G-VMEHMQXW96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
