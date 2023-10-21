// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRVTaamEyDegJTwGR066PSdJuA3dE9djo",
  authDomain: "brand-shop-firebase-project.firebaseapp.com",
  projectId: "brand-shop-firebase-project",
  storageBucket: "brand-shop-firebase-project.appspot.com",
  messagingSenderId: "604882379651",
  appId: "1:604882379651:web:9dfa0da0c991c82c770cb6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth