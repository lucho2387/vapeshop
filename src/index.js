// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUGeO-wAajKOyAmSnpXmATHduZbKFKJeE",
  authDomain: "vapeshop-24888.firebaseapp.com",
  projectId: "vapeshop-24888",
  storageBucket: "vapeshop-24888.appspot.com",
  messagingSenderId: "53438948333",
  appId: "1:53438948333:web:671d8ef1ada751e5673de4"
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
