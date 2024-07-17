// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Hp5e4lGI2akKZTnEutBgxOZC5bDXyfs",
  authDomain: "justbuy-dc178.firebaseapp.com",
  projectId: "justbuy-dc178",
  storageBucket: "justbuy-dc178.appspot.com",
  messagingSenderId: "776602223528",
  appId: "1:776602223528:web:153cb4fd9e58cd7d96d39d",
  measurementId: "G-CW99KPKSJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);