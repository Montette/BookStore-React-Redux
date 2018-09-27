import Rebase from 're-base';
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACQrCQHk2y5fL5ghoC0D10w0UgQnK7Sfo",
    authDomain: "bookstore-9c415.firebaseapp.com",
    databaseURL: "https://bookstore-9c415.firebaseio.com",
    projectId: "bookstore-9c415",
    storageBucket: "bookstore-9c415.appspot.com",
    messagingSenderId: "562860230439"
  });

  const fbase = Rebase.createClass(firebase.databaseApp());

  expor {fbase, firebaseApp}