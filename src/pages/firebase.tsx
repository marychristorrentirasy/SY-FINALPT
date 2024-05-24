// src/firebase.tsx
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYTQhCTOo95oDIJ4DyJmfLUVeWwKtLyeg",
  authDomain: "fir-auth-efda7.firebaseapp.com",
  projectId: "fir-auth-efda7",
  storageBucket: "fir-auth-efda7.appspot.com",
  messagingSenderId: "303833061075",
  appId: "1:303833061075:web:cb22ed92884366df9ee626",
  measurementId: "G-Y9X50592FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances

