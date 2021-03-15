import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAsWmKi7n49TQzYXq_hmLyXeb-iWPc6r-I",
  authDomain: "crwn-db-1f152.firebaseapp.com",
  projectId: "crwn-db-1f152",
  storageBucket: "crwn-db-1f152.appspot.com",
  messagingSenderId: "756938521096",
  appId: "1:756938521096:web:7dbb5c003a3616b8c3afbd",
  measurementId: "G-EJ1HNHBY4X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
