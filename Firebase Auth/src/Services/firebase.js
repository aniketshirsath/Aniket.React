// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf-0HCjQGh2VbdbEAMgojuErAfqrL1yME",
  authDomain: "my-firebase-auth-c8fd3.firebaseapp.com",
  projectId: "my-firebase-auth-c8fd3",
  storageBucket: "my-firebase-auth-c8fd3.appspot.com",
  messagingSenderId: "808882797378",
  appId: "1:808882797378:web:c65511ae194eabeae6e6db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();