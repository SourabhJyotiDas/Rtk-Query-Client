// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqJUcH_8wjh_uC_QyQywIWo8yXudpooEo",
  authDomain: "react-firebase-e6c31.firebaseapp.com",
  projectId: "react-firebase-e6c31",
  storageBucket: "react-firebase-e6c31.appspot.com",
  messagingSenderId: "426438253784",
  appId: "1:426438253784:web:1a49e12001816d723f0bad",

  // databaseURL:"https://react-firebase-e6c31-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);