import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhWdXwawKybSGx0R2i7M5lskDxdOQhi_k",
  authDomain: "flashcardapp-7e9d6.firebaseapp.com",
  projectId: "flashcardapp-7e9d6",
  storageBucket: "flashcardapp-7e9d6.firebasestorage.app",
  messagingSenderId: "241240728125",
  appId: "1:241240728125:web:63aaa8edf7a20a5c7a8054",
  measurementId: "G-EVE97SZLZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, collection, query, where, getDocs, doc, setDoc };
export type {User}