import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Firebase Config Setting's
const firebaseConfig = {
  apiKey: "AIzaSyCUtVtzQ8tW7wxzrnRSZoukVqJUhFw9zDY",
  authDomain: "shortly-5117c.firebaseapp.com",
  databaseURL: "https://shortly-5117c.firebaseio.com",
  projectId: "shortly-5117c",
  storageBucket: "shortly-5117c.appspot.com",
  messagingSenderId: "822990441794",
  appId: "1:822990441794:web:45d246270e2838d8ef4cdb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createProfileDocument = async (userAuthObject, additionalData) => {
  if (!userAuthObject) {
    return;
  }

  const userRef = firestore.doc(`/users/${userAuthObject.uid}`);
  const userSnapshot = await userRef.get();

  // check if the info is already present
  if (!userSnapshot.exists) {
    const createdAt = Date.now();
    const { email, displayName } = userAuthObject;
    try {
      userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log({
        type: "Error writing user profile",
        error,
      });
    }
  }

  return userRef;
};

// Google Sign-in Settings
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider);
};

// Github Sign-In
const githubProvider = new firebase.auth.GithubAuthProvider();
export const signInWithGithub = () => auth.signInWithPopup(githubProvider);

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
