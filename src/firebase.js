import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAUfEikS7xRyRAE40MazkCVUfuurVkz_1Y",
  authDomain: "e-com-63b81.firebaseapp.com",
  databaseURL: "https://e-com-63b81-default-rtdb.firebaseio.com",
  projectId: "e-com-63b81",
  storageBucket: "e-com-63b81.appspot.com",
  messagingSenderId: "388426307658",
  appId: "1:388426307658:web:e432e8f7af01f905672eb3",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export default firebase;
