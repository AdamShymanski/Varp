"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.createUserTest = exports.createUser = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const serviceAccount = require('../keys/serviceAccountKey.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
admin.initializeApp();
const db = admin.firestore();
exports.createUser = functions.https.onCall((data) => {
    try {
        const { email, name, password, age, contry } = data;
        admin
            .auth()
            .createUser({
            email: email,
            emailVerified: false,
            password: password,
            displayName: name,
            disabled: false,
        })
            .then((currentUser) => {
            console.log('Successfully created new user');
            // Creating user's doc with custom info
            admin
                .firestore()
                .collection('users')
                .doc(currentUser.uid)
                .set({
                age: age,
                contry: contry,
                dailyStreak: 0,
                surveyProgram: 0,
                referralProgram: 0,
                referralCode: currentUser.uid,
            })
                .then(() => {
                console.log('Document successfully written!');
                return currentUser;
            })
                .catch((error) => {
                console.error('Error writing document: ', error);
                return error;
            });
        })
            .catch((error) => {
            console.log('Error creating new user:', error);
            return error;
        });
    }
    catch (error) {
        return error;
    }
});
// : {email: string; password: string}
exports.createUserTest = functions.https.onCall(async (data) => {
    const { email, password } = data;
    console.log(email);
    console.log(password);
    try {
        const user = await admin.auth().createUser({
            email: email,
            emailVerified: false,
            password: password,
            disabled: false,
        });
        console.log(user);
        const userDoc = db.collection('users').doc(user.uid);
        await userDoc.set({
            name: 'Alan',
        });
    }
    catch (error) {
        if (error.code === 'auth/email-already-exists') {
            throw new functions.https.HttpsError('already-exists', 'The provided email is already in use by an existing user');
        }
        else {
            // throw new functions.https.HttpsError("...other code....", "...");
            // If an error other than HttpsError is thrown,
            // your client instead receives an error with
            // the message INTERNAL and the code internal.
        }
    }
});
exports.test = functions.https.onCall((data) => {
    console.log('test log test log test log test log');
    return { result: `success ${data}` };
});
//# sourceMappingURL=index.js.map