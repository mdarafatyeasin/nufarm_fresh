// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtwTNQg076wp6bPNvoPSP-y14P3Qt4tk4",
  authDomain: "nufarm-fresh.firebaseapp.com",
  projectId: "nufarm-fresh",
  storageBucket: "nufarm-fresh.appspot.com",
  messagingSenderId: "887879779772",
  appId: "1:887879779772:web:003c42ec969902b2ae57b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth