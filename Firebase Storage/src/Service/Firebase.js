// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWxpqYX0nilkx7bYirCTW4KoSwXmatmUc",
  authDomain: "my-firebase-storage-139fc.firebaseapp.com",
  projectId: "my-firebase-storage-139fc",
  storageBucket: "my-firebase-storage-139fc.appspot.com",
  messagingSenderId: "910934345092",
  appId: "1:910934345092:web:3f641d01b388b129f609d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
