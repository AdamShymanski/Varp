const firebase = require("firebase/app");
require("firebase/auth");
const firebaseConfig = require("./firebaseConfig");

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

if (process.env.ENVIRONMENT !== "PRODUCTION") {
  auth.useEmulator("http://localhost:9099");
}

exports.auth = auth;
