import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYJDP6IQ8wK1f5SKY0e0AY7ce8nC4N_iM",
  authDomain: "finance-tracker-9e92b.firebaseapp.com",
  projectId: "finance-tracker-9e92b",
  storageBucket: "finance-tracker-9e92b.appspot.com",
  messagingSenderId: "1001715383902",
  appId: "1:1001715383902:web:148c09f23ae1e6441fbecf",
};

//Init firebase
firebase.initializeApp(firebaseConfig);

//Init service
const projectFirestore = firebase.firestore();

//Init auth
const projectAuth = firebase.auth();

//Timestamp 
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
