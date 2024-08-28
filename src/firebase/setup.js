import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC09S668PFgC2d1sduqnYb0RmOZNnPOhUs",
    authDomain: "react-clone-41397.firebaseapp.com",
    projectId: "react-clone-41397",
    storageBucket: "react-clone-41397.appspot.com",
    messagingSenderId: "500263059536",
    appId: "1:500263059536:web:4dd15a025d7e1b56251155"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

