import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtArkcnA4JHps3hpcu7lbUEdutqtW2MbM",
  authDomain: "clone-d1b5d.firebaseapp.com",
  projectId: "clone-d1b5d",
  storageBucket: "clone-d1b5d.appspot.com",
  messagingSenderId: "760133399875",
  appId: "1:760133399875:web:55008779a8d731e774abf6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
