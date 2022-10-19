// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-UJ4udfBPEc2IkH8Z3RGDEXOg31DeG9A",
    authDomain: "hotel-al-saudia.firebaseapp.com",
    projectId: "hotel-al-saudia",
    storageBucket: "hotel-al-saudia.appspot.com",
    messagingSenderId: "95821697288",
    appId: "1:95821697288:web:1cd3fe3b4e72c0daea5cbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;