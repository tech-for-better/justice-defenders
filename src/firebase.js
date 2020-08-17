import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmA1TWOCdVoBYEkiR0x6ekMVWo51GdZiA",
  authDomain: "justice-defenders.firebaseapp.com",
  databaseURL: "https://justice-defenders.firebaseio.com",
  projectId: "justice-defenders",
  storageBucket: "justice-defenders.appspot.com",
  messagingSenderId: "888660506785",
  appId: "1:888660506785:web:053ab01ceebc7e6e5f58e0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
