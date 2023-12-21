// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6J48BwouR3UtMOt9km_HumYmHjmYfG0k",
  authDomain: "task-management-13005.firebaseapp.com",
  projectId: "task-management-13005",
  storageBucket: "task-management-13005.appspot.com",
  messagingSenderId: "65747933895",
  appId: "1:65747933895:web:7342148d1916c6fb313ce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth