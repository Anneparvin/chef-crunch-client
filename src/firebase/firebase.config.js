// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxqelT-XjUa4rbdYaG9DT__hTPPdfUDis",
  authDomain: "chef-krunch.firebaseapp.com",
  projectId: "chef-krunch",
  storageBucket: "chef-krunch.appspot.com",
  messagingSenderId: "955468332229",
  appId: "1:955468332229:web:954d80a32dfc4cd90ac4ac",
  measurementId: "G-FLSMRC05N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;