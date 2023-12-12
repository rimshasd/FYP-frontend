import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiUFUl-50t2rXrOSSff491oRwfHfVyk74",
  authDomain: "healthcane.firebaseapp.com",
  projectId: "healthcane",
  storageBucket: "healthcane.appspot.com",
  messagingSenderId: "459740854347",
  appId: "1:459740854347:web:ca338be2a5765388f3b5ce",
  measurementId: "G-X5LBJW9SC9",
};

console.log("Connected with FireBase");

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
