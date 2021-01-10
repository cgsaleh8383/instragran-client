import firebase from "firebase";
var firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyAM7WQ0zry53GBuRHk4PaszQDnGH0s2_E4",
  authDomain: "instagram-3677c.firebaseapp.com",
  projectId: "instagram-3677c",
  storageBucket: "instagram-3677c.appspot.com",
  messagingSenderId: "358460943932",
  appId: "1:358460943932:web:9744c15474744cd46a9d39",
  measurementId: "G-TP2FPLZGK3"

};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
