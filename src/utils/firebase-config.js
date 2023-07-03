import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBtLD5tXK2N-0O8e_cEDGhDincOtkqd6vQ",
    authDomain: "react-netflix-clone-b98d4.firebaseapp.com",
    projectId: "react-netflix-clone-b98d4",
    storageBucket: "react-netflix-clone-b98d4.appspot.com",
    messagingSenderId: "515738692247",
    appId: "1:515738692247:web:ec4fe14579b0d7695197d2",
    measurementId: "G-WP78XRWDLZ"
  };
  
 
  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app);