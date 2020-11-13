import * as firebase from "firebase/app";
import "firebase/database"
import "firebase/auth"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyAfjaFt8LWDdiB6QF7HFBVAtxekUxqb4J8",
  authDomain: "olx-clone-faa35.firebaseapp.com",
  databaseURL: "https://olx-clone-faa35.firebaseio.com",
  projectId: "olx-clone-faa35",
  storageBucket: "olx-clone-faa35.appspot.com",
  messagingSenderId: "942264423336",
  appId: "1:942264423336:web:801daa23afd986b8ea039d",
  measurementId: "G-X2BD0YCFN6",
};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseApp = firebase
