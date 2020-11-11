import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXUy3NuuREpSAgB1m6VUGbGnrsg-tEnbI",
  authDomain: "tik-tok-by-mukund-chamariya.firebaseapp.com",
  databaseURL: "https://tik-tok-by-mukund-chamariya.firebaseio.com",
  projectId: "tik-tok-by-mukund-chamariya",
  storageBucket: "tik-tok-by-mukund-chamariya.appspot.com",
  messagingSenderId: "806049146072",
  appId: "1:806049146072:web:77edee8706183f4beb63ad",
  measurementId: "G-TJDESJ57EZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
