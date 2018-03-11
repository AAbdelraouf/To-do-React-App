import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyC4jsvf0PsZvYTH_25jXLAdLXpDVFg1uhw",
  authDomain: "cinegearsuserslist.firebaseapp.com",
  databaseURL: "https://cinegearsuserslist.firebaseio.com",
  projectId: "cinegearsuserslist",
  storageBucket: "cinegearsuserslist.appspot.com",
  messagingSenderId: "934939093990"
};
var fire = firebase.initializeApp(config);
export default fire;