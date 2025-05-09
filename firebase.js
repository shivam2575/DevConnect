// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FIREBASE_API_KEY } from "./src/utils/constants";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "devconnect-cec4a.firebaseapp.com",
  projectId: "devconnect-cec4a",
  storageBucket: "devconnect-cec4a.firebasestorage.app",
  messagingSenderId: "429753493672",
  appId: "1:429753493672:web:393ca632c5a16f03007a9d",
  measurementId: "G-T3J7LE220P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
