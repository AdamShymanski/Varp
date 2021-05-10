"use strict";
// const serviceAccount = require('../keys/serviceAccountKey.json');
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserTest = exports.fetchUserData = void 0;
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
// export const createUser = functions.https.onCall((data: RegisterProps) => {
//   try {
//     const {email, name, password, age, contry} = data;
//     admin
//       .auth()
//       .createUser({
//         email: email,
//         emailVerified: false,
//         password: password,
//         displayName: name,
//         disabled: false,
//       })
//       .then((currentUser: {uid: string}) => {
//         console.log('Successfully created new user');
//         // Creating user's doc with custom info
//         admin
//           .firestore()
//           .collection('users')
//           .doc(currentUser.uid)
//           .set({
//             balance: 0,
//             age: age,
//             contry: contry,
//             dailyStreak: 0,
//             surveyProgram: 0,
//             referralProgram: 0,
//             referralCode: currentUser.uid,
//           })
//           .then(() => {
//             console.log('Document successfully written!');
//             return currentUser;
//           })
//           .catch((error) => {
//             console.error('Error writing document: ', error);
//             return error;
//           });
//       })
//       .catch((error) => {
//         console.log('Error creating new user:', error);
//         return error;
//       });
//   } catch (error) {
//     return error;
//   }
// });
// : {email: string; password: string}
exports.fetchUserData = functions.https.onCall(async (data) => {
    const result = await db.collection('users').doc(data.uid).get();
    return result.data();
});
exports.createUserTest = functions.https.onCall(async (data) => {
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
            contry: country,
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
            // throw new functions.https.HttpsError("...other code....", "...");
            // If an error other than HttpsError is thrown,
            // your client instead receives an error with
            // the message INTERNAL and the code internal.
        }
    }
});
//# sourceMappingURL=index.js.map