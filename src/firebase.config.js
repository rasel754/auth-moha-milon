// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Y1uDuu81Enkdj7cBGpYdpDxAcrXClms",
  authDomain: "auth-moha-milon-68998.firebaseapp.com",
  projectId: "auth-moha-milon-68998",
  storageBucket: "auth-moha-milon-68998.appspot.com",
  messagingSenderId: "1071328755089",
  appId: "1:1071328755089:web:d0c70707ee4a25b33f2e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;