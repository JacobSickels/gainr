// tslint:disable-next-line:import-name
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC9IWI7MvnowZi0EH1gSp7p8sPUkrvxm_A",
  authDomain: "gainr-fda31.firebaseapp.com",
  databaseURL: "https://gainr-fda31.firebaseio.com",
  projectId: "gainr-fda31",
  storageBucket: "gainr-fda31.appspot.com",
  messagingSenderId: "642341971931"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;

// let firebaseUser = await auth.signInWithPopup(provider); // login with firebase

// auth.signOut();

// auth.onAuthStateChanged(firebaseUser => {
//   if (firebaseUser) {

//   }
// });
