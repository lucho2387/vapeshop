import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyOnaS43dx1xKhhtoQz51x0D0KnZj5Zec",
  authDomain: "ecommerce-3ef0f.firebaseapp.com",
  projectId: "ecommerce-3ef0f",
  storageBucket: "ecommerce-3ef0f.appspot.com",
  messagingSenderId: "337090516129",
  appId: "1:337090516129:web:ac157e74a3b26e14498ce0",
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
