// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_jRorhXtkF75RyRqku9f4DTszV6l85jo",
  authDomain: "gohorizon-5e901.firebaseapp.com",
  projectId: "gohorizon-5e901",
  storageBucket: "gohorizon-5e901.appspot.com",
  messagingSenderId: "706767071360",
  appId: "1:706767071360:web:90265d70cf3c4ab3439e65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;


