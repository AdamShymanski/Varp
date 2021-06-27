import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// const serviceAccount = require('../keys/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

const db = admin.firestore();

interface RegisterProps {
  email: string;
  password: string;
  name: string;
  age: number;
  country: string;
}
interface FUDProps {
  uid: string;
}

export const fetchUserData = functions.https.onCall(async (data: FUDProps) => {
  try {
    const result = await db.collection('users').doc(data.uid).get();
    return result.data();
  } catch (error) {
    return error;
  }
});

export const createUser = functions.https.onCall(
  async (data: RegisterProps) => {
    const {email, password, age, name, country} = data;

    try {
      const user = await admin.auth().createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: name,
        disabled: false,
      });

      await db.collection('users').doc(user.uid).set({
        age: age,
        name: name,
        country: country,

        balance: 0,
        profit: false,
        lastAction: 0,

        dailyStreak: 0,
        referralProgram: 0,

        usedReferralCode: '',
        referralCode: user.uid,
      });

      return {result: 'success'};
    } catch (error) {
      if (error.code === 'auth/email-already-exists') {
        throw new functions.https.HttpsError(
          'already-exists',
          'The provided email is already in use by an existing user',
        );
      } else {
        //
        // throw new functions.https.HttpsError("...other code....", "...");
        // If an error other than HttpsError is thrown,
        // your client instead receives an error with
        // the message INTERNAL and the code internal.
      }
    }
  },
);
