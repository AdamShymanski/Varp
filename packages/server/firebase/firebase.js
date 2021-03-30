const firebase = require("firebase/app");
require("firebase/auth");
const firebaseConfig = require("./firebaseConfig");

const firebaseApp = firebase.initializeApp(firebaseConfig);
exports.auth = firebaseApp.auth();
