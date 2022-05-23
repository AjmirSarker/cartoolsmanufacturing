// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKg-GLaqF6UTHAyS6nHqFCwhxVfDIKFeU',
  authDomain: 'car-manufacturing.firebaseapp.com',
  projectId: 'car-manufacturing',
  storageBucket: 'car-manufacturing.appspot.com',
  messagingSenderId: '659045548780',
  appId: '1:659045548780:web:9ffa82de1514903c1a9bc9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,