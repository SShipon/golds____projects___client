// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCer_qkCucSY2u6Q_eyCbdhP8rYrm1TiBw",
  authDomain: "golds-1d5ff.firebaseapp.com",
  projectId: "golds-1d5ff",
  storageBucket: "golds-1d5ff.appspot.com",
  messagingSenderId: "556071598013",
  appId: "1:556071598013:web:1786d0c89b02b4b51284d4",
  measurementId: "G-FQBZZPYPBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 

