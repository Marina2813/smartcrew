// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA48EA5MnzlbmXX-LfZfsGQ-TanLNqdmRk",
  authDomain: "grande-6c2d0.firebaseapp.com",
  projectId: "grande-6c2d0",
  storageBucket: "grande-6c2d0.appspot.com",
  messagingSenderId: "362926508108",
  appId: "1:362926508108:web:32f79bc7c7d9e45836cce9",
  measurementId: "G-1BSRX29BHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  