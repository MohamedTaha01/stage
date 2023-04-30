// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8KyTJTZNXMwn9NGiqBddAkt4A6MQKtRM",

  authDomain: "stage-cb6df.firebaseapp.com",

  projectId: "stage-cb6df",

  storageBucket: "stage-cb6df.appspot.com",

  messagingSenderId: "557321321991",

  appId: "1:557321321991:web:01ad1d48f96fb3973b34a2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
