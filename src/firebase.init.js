// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhCzE3yze6VP2fr-4O68fqXQ1Fg7gfblg",
    authDomain: "food-mania-2aec1.firebaseapp.com",
    projectId: "food-mania-2aec1",
    storageBucket: "food-mania-2aec1.appspot.com",
    messagingSenderId: "192877991395",
    appId: "1:192877991395:web:c9a18ed9dba0e2a5723cd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;



