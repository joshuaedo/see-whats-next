import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCImHH__4WZS16xpvJ97-kkgvkKumI8b0",
  authDomain: "joshuaedo-netflix.firebaseapp.com",
  projectId: "joshuaedo-netflix",
  storageBucket: "joshuaedo-netflix.appspot.com",
  messagingSenderId: "511139767758",
  appId: "1:511139767758:web:29b086253f032ba5cbf79f",
  measurementId: "G-S0DY0L3CKQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
