// Firebase Configuration - Janta Hotel
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWvTTPFJIyQqpVQCQmDHYADCpaLzfvCRw",
  authDomain: "janta-hotel.firebaseapp.com",
  projectId: "janta-hotel",
  storageBucket: "janta-hotel.firebasestorage.app",
  messagingSenderId: "302933566636",
  appId: "1:302933566636:web:024b34e42222edeccf2b09"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
