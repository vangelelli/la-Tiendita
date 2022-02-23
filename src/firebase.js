// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAunqMZUl0uEl1vJ_KCh1YZO0eMtk9-qno",
  authDomain: "la-tiendita-73453.firebaseapp.com",
  projectId: "la-tiendita-73453",
  storageBucket: "la-tiendita-73453.appspot.com",
  messagingSenderId: "831217894705",
  appId: "1:831217894705:web:6a55eeda4fc20d05365c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos de firestore para usarla en la app

export const db = getFirestore(app);