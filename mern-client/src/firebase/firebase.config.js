// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdFZxqAwFoHVFEFk3QcTbbVnJCDbPzHNk",
  authDomain: "mern-book-inventory-d4f5e.firebaseapp.com",
  projectId: "mern-book-inventory-d4f5e",
  storageBucket: "mern-book-inventory-d4f5e.appspot.com",
  messagingSenderId: "904599918439",
  appId: "1:904599918439:web:22e7907f951355754dc1c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;