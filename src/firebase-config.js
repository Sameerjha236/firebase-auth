import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTwwr3rC8ctx--loGxkv4beJJXxamvl9E",
  authDomain: "authentication-da18c.firebaseapp.com",
  projectId: "authentication-da18c",
  storageBucket: "authentication-da18c.appspot.com",
  messagingSenderId: "238200797959",
  appId: "1:238200797959:web:4bce2175e9e5703141a3a2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
