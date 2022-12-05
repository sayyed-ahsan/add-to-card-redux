// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWTwNM9TuCkJ9JrTMiAXyP79sqxQ9uZw8",
  authDomain: "blob-shop.firebaseapp.com",
  projectId: "blob-shop",
  storageBucket: "blob-shop.appspot.com",
  messagingSenderId: "571302362326",
  appId: "1:571302362326:web:68ca8e06bee1b64ea35d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;