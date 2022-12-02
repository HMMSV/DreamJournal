// firebase.js
import { initializeApp } from 'firebase/app';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const config = {
  apiKey: "AIzaSyCNvoL5AB8VLiDtRJI0A3UkZmmgbc0_ri4",
  authDomain: "project3-12ac4.firebaseapp.com",
  projectId: "project3-12ac4",
  storageBucket: "project3-12ac4.appspot.com",
  messagingSenderId: "580885515988",
  appId: "1:580885515988:web:bd6eb75cf2bfa640d1b541"

};

// setting a variable that initializes our application
const firebase = initializeApp(config);
// this exports the CONFIGURED version of firebase
export default firebase;