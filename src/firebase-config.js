// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import dotenv from "dotenv";
// dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKquKC6yqPdydz0JKHIOR283dneLzNKus",
  authDomain: "fireblog-c63ae.firebaseapp.com",
  projectId: "fireblog-c63ae",
  storageBucket: "fireblog-c63ae.appspot.com",
  messagingSenderId: "2176795904",
  appId: "1:2176795904:web:e02e6aeebd8d249c529fe5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
