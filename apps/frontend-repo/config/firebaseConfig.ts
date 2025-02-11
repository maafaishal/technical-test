// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// This is intended to be checked by interviewer
// The firebase project will be removed once done
const firebaseConfig = {
  apiKey: "AIzaSyCa21Aw_K5p6jzU6YDTGniKK7yJA6sVN68",
  authDomain: "ebuddy-tech-test-cfb0a.firebaseapp.com",
  projectId: "ebuddy-tech-test-cfb0a",
  storageBucket: "ebuddy-tech-test-cfb0a.firebasestorage.app",
  messagingSenderId: "453763107935",
  appId: "1:453763107935:web:e9f2a9e4303c48aad91fea",
  measurementId: "G-LDTX315TMC",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const functions = getFunctions(firebaseApp);

export const provider = new GoogleAuthProvider();

// if (process.env.NODE_ENV === "development") {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   connectFunctionsEmulator(functions, "127.0.0.1", 5001);
// }
