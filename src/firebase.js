import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBAyAnnX32Fr2G98OnqUgvJbZtErs5f4AI",
    authDomain: "slack-mh.firebaseapp.com",
    projectId: "slack-mh",
    storageBucket: "slack-mh.appspot.com",
    messagingSenderId: "612937929601",
    appId: "1:612937929601:web:f6a06187f8dbaa014e0e80",
    measurementId: "G-T429GC7090"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };