import firebase from "firebase/app";
import "firebase/auth";

require("firebase/functions");

const app = firebase.initializeApp({
  apiKey: "AIzaSyCg9wjlkpmjmqNjS56gRFsKpjB9xdSJO-Q",
  authDomain: "varp-ba7a7.firebaseapp.com",
  projectId: "varp-ba7a7",
  storageBucket: "varp-ba7a7.appspot.com",
  messagingSenderId: "273561332273",
  appId: "1:273561332273:web:366d7188c7a18e9ff94310",
  measurementId: "G-R3N6S59Y0B"
});

//EMULATOR - ONLY FOR DEVELOPMENT ENVIREMENT
app.functions().useEmulator("localhost", 5001);

export const auth = app.auth();
export default app;
