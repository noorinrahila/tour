import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAXJ4R6ODVRPlCyFJv2rZGRApR9HL6M9as",
    authDomain: "tourapp-c0700.firebaseapp.com",
    projectId: "tourapp-c0700",
    storageBucket: "tourapp-c0700.appspot.com",
    messagingSenderId: "28237819437",
    appId: "1:28237819437:web:055c8af5126e6b5305d2a4"
  };
  
  const app = initializeApp(firebaseConfig);

  export const db= getFirestore(app);