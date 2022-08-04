// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY9jykVWmsNREgvCgLHSm2fsBiJCop6aU",
  authDomain: "medium2idk.firebaseapp.com",
  projectId: "medium2idk",
  storageBucket: "medium2idk.appspot.com",
  messagingSenderId: "94020303385",
  appId: "1:94020303385:web:87479dbd104cff84090888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let bd = firebase.firestore()