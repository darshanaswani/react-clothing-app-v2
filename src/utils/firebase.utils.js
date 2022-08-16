import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7_a1YTej64P5SQ7lHNVA2RSxxn51x8Y0",
  authDomain: "crwn-clothing-db-d122b.firebaseapp.com",
  projectId: "crwn-clothing-db-d122b",
  storageBucket: "crwn-clothing-db-d122b.appspot.com",
  messagingSenderId: "608738532818",
  appId: "1:608738532818:web:d1602055b40e2e41b2bc0b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};