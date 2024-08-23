// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE4RV5XFtB22UACdIsuTQWSnvblaPCRmc",
  authDomain: "fir-databse-f6d48.firebaseapp.com",
  projectId: "fir-databse-f6d48",
  storageBucket: "fir-databse-f6d48.appspot.com",
  messagingSenderId: "871101545195",
  appId: "1:871101545195:web:d7e2e1ae075df316605cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
