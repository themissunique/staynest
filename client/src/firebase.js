// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'itsstaynest.firebaseapp.com',
  projectId: 'itsstaynest',
  storageBucket: 'itsstaynest.appspot.com',
  messagingSenderId: '1023320107556',
  appId: '1:1023320107556:web:dbfc5ba470cd319c1dc6b1',
  measurementId: 'G-9BF9K4ZNXR',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
