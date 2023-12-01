// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTSy1P8MgEFsfeuHhcoVmIWBoVvrzcj8Y",
  authDomain: "health-warden-eba5e.firebaseapp.com",
  projectId: "health-warden-eba5e",
  storageBucket: "health-warden-eba5e.appspot.com",
  messagingSenderId: "246819324915",
  appId: "1:246819324915:web:a43746cb0abb6263a74886",
  measurementId: "G-NHHSPDXTCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication object
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//firebase db Object
const db = getFirestore();

export { auth,provider,db }