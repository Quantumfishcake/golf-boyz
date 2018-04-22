import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAgOjKjD2UQ1JFqWiW98rruQWcEKoOJUc8",
  authDomain: "golf-boys.firebaseapp.com",
  databaseURL: "https://golf-boys.firebaseio.com",
  projectId: "golf-boys",
  storageBucket: "golf-boys.appspot.com",
  messagingSenderId: "213083351616"
};

export const app = firebase.initializeApp(config);
export const db = firebase.firestore();
