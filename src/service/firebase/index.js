import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {

  apiKey: "AIzaSyAmfxlEhtmhl--ZlZDluI111DzuGddsNMs",

  authDomain: "ecommerce-react-d9fef.firebaseapp.com",

  projectId: "ecommerce-react-d9fef",

  storageBucket: "ecommerce-react-d9fef.firebasestorage.app",

  messagingSenderId: "7415746382",

  appId: "1:7415746382:web:ab39ff57a45b8cc4c0981f"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)

