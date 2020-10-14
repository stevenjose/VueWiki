// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNnwpEF3OP5SWl1suVn0aFXxGJRIZ9XoE",
  authDomain: "wikivue-7cf1f.firebaseapp.com",
  databaseURL: "https://wikivue-7cf1f.firebaseio.com",
  projectId: "wikivue-7cf1f",
  storageBucket: "wikivue-7cf1f.appspot.com",
  messagingSenderId: "743178239987",
  appId: "1:743178239987:web:62bad38e299f39a60edc86",
  measurementId: "G-558RT7P139"
};

firebase.initializeApp(firebaseConfig);
export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
