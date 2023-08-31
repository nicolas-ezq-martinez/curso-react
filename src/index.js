import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxTHeWkh9-X6POK9mYAGVxaZ8jr3B_Qc",
  authDomain: "coderhouse-ecommerce-782d0.firebaseapp.com",
  projectId: "coderhouse-ecommerce-782d0",
  storageBucket: "coderhouse-ecommerce-782d0.appspot.com",
  messagingSenderId: "970214295936",
  appId: "1:970214295936:web:1451618a5a7c53a81a9965"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
