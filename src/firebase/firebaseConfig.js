// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg2MevlQnvqYeAUh0OtYdWI0oyti2-jKw",
  authDomain: "gform-clone.firebaseapp.com",
  projectId: "gform-clone",
  storageBucket: "gform-clone.appspot.com",
  messagingSenderId: "533258869067",
  appId: "1:533258869067:web:bdf71f48e72542432370ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
connectFirestoreEmulator(db, "localhost", 8080);
