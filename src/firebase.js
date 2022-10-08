import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD27nv-P98m9g2E7oxDRnlCrNI4nxiJ6so",
    authDomain: "twitter-clone-b1c1e.firebaseapp.com",
    projectId: "twitter-clone-b1c1e",
    storageBucket: "twitter-clone-b1c1e.appspot.com",
    messagingSenderId: "892649479236",
    appId: "1:892649479236:web:ac5969807f4e877500b011"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;

  