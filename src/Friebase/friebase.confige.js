// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBY0letycozQGm2yLLwDDDptjaPsGLqys",
  authDomain: "auth-firebase-context-ta-f7ccd.firebaseapp.com",
  projectId: "auth-firebase-context-ta-f7ccd",
  storageBucket: "auth-firebase-context-ta-f7ccd.appspot.com",
  messagingSenderId: "75141286011",
  appId: "1:75141286011:web:0fab2fe29541a303a77ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}