// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDVAKn9Qvg4XhQPJJyscJAXky4HPxzfrg",
  authDomain: "book-app-d5c52.firebaseapp.com",
  projectId: "book-app-d5c52",
  storageBucket: "book-app-d5c52.appspot.com",
  messagingSenderId: "403726314117",
  appId: "1:403726314117:web:382d340b061c45bb3017ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

