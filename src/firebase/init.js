// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getFirestore
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqEoO5ZpQoGCqtvJctk5dqHaqL-SwwFd4",
  authDomain: "test1-d8ab7.firebaseapp.com",
  projectId: "test1-d8ab7",
  storageBucket: "test1-d8ab7.appspot.com",
  messagingSenderId: "212706435549",
  appId: "1:212706435549:web:b8347cb3787b0c8a859634",
  measurementId: "G-LC61E01W9P"
};

const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore(app);
export default db;