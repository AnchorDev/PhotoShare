// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgednh8Bg4-XAeuhSpKA2tYZk5ldf3nro",
  authDomain: "shareride-8fc10.firebaseapp.com",
  projectId: "shareride-8fc10",
  storageBucket: "shareride-8fc10.appspot.com",
  messagingSenderId: "125603078556",
  appId: "1:125603078556:web:0b1b7006f97760e899e859",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
