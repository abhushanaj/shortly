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

export const createProfileDocument = async (user, additionalData) => {
  const userRef = firestore.doc(`/users/${user.uid}`);
  const userSnapshot = await userRef.get();

  // check if the info is already present
  if (userSnapshot.exists) {
    return;
  }

  // info to set to DB
  const createdAt = Date.now();

  const userDBObject = {
    email: user.email,
    displayName: user.displayName,
    createdAt,
    ...additionalData,
  };

  await userRef.set(userDBObject);
  return userDBObject;
};

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
