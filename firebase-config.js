// Firebase Configuration - Janta Hotel
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYoerRQAmnTotOtCWsU-sO0cpy2mI_I7I",
  authDomain: "janta-hotel-2-2.firebaseapp.com",
  projectId: "janta-hotel-2",
  storageBucket: "janta-hotel-2.firebasestorage.app",
  messagingSenderId: "1052131923112",
  appId: "1:1052131923112:web:024b34e42222edeccf2b09"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
