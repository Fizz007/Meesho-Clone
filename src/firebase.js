import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbTqLu-MLDjzSc3mD6ew99p9efmQOuqYU",
    authDomain: "meesho-clone-cb528.firebaseapp.com",
    projectId: "meesho-clone-cb528",
    storageBucket: "meesho-clone-cb528.appspot.com",
    messagingSenderId: "157891266086",
    appId: "1:157891266086:web:9f95569f9ac571633b48e7"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);