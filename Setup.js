// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE1NR0I-_m4T0MjcZ3oPvoM9RyxouB1nU",
  authDomain: "hostar-clone-f6cd8.firebaseapp.com",
  projectId: "hostar-clone-f6cd8",
  storageBucket: "hostar-clone-f6cd8.appspot.com",
  messagingSenderId: "955336157106",
  appId: "1:955336157106:web:79973224aa1b9b5c80e6ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
