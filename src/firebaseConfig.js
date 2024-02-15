// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAR9e6hdjh992iX3YqrlHcnKNgNuuqJpCI",
    authDomain: "tradingthing-b514f.firebaseapp.com",
    projectId: "tradingthing-b514f",
    storageBucket: "tradingthing-b514f.appspot.com",
    messagingSenderId: "786846724649",
    appId: "1:786846724649:web:3c2af93b4cc3b94d056238",
    measurementId: "G-WQ5WNWD0D5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app);