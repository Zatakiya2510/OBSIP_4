import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCvWEJyX7ntabSqtgM43i_b_ev9pyhE9TY",
  authDomain: "fir-aut-8c616.firebaseapp.com",
  projectId: "fir-aut-8c616",
  storageBucket: "fir-aut-8c616.appspot.com",
  messagingSenderId: "616936317761",
  appId: "1:616936317761:web:fdedc236d7ec38ce4977c0",
  measurementId: "G-VMNPTXRKCJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};