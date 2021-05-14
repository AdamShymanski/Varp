"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAccount = exports.fetchUserData = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const serviceAccount = require('../keys/serviceAccountKey.json');
admin.initializeApp();
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
const db = admin.firestore();
exports.fetchUserData = functions.https.onCall(async (data) => {
    try {
        const result = await db.collection('users').doc(data.uid).get();
        return result.data();
    }
    catch (error) {
        return error;
    }
});
exports.createUserAccount = functions.https.onCall(async (data) => {
    const { email, password, age, name, country } = data;
    try {
        const user = await admin.auth().createUser({
            email: email,
            emailVerified: false,
            password: password,
            displayName: name,
            disabled: false,
        });
        await db.collection('users').doc(user.uid).set({
            balance: 0,
            age: age,
            country: country,
            dailyStreak: 0,
            surveyProgram: 0,
            referralProgram: 0,
            referralCode: user.uid,
            lastAction: '',
            name: name,
        });
        return { result: 'success' };
    }
    catch (error) {
        if (error.code === 'auth/email-already-exists') {
            throw new functions.https.HttpsError('already-exists', 'The provided email is already in use by an existing user');
        }
        else {
            //
            // throw new functions.https.HttpsError("...other code....", "...");
            // If an error other than HttpsError is thrown,
            // your client instead receives an error with
            // the message INTERNAL and the code internal.
        }
    }
});
//# sourceMappingURL=index.js.map