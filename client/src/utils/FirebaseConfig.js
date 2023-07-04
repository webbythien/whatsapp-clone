
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCa3AxrtGblqfm8vf3STY7vgCJG2Mpi6_k",
  authDomain: "whatsapp-clone-80728.firebaseapp.com",
  projectId: "whatsapp-clone-80728",
  storageBucket: "whatsapp-clone-80728.appspot.com",
  messagingSenderId: "427540055964",
  appId: "1:427540055964:web:e7682bb0dc97357c3d6a59",
  measurementId: "G-70P0XL91W3"
};

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)