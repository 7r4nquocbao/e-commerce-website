import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDflihcu4WPBBYWZ0ng3l0vj96PhQ3H_Js",
    authDomain: "e-commerce-website-b9e4a.firebaseapp.com",
    databaseURL: "https://e-commerce-website-b9e4a.firebaseio.com",
    projectId: "e-commerce-website-b9e4a",
    storageBucket: "e-commerce-website-b9e4a.appspot.com",
    messagingSenderId: "12664259431",
    appId: "1:12664259431:web:4101ef1c1f59949e09a5c2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

