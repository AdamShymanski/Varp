import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

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
  const result = await db.collection('users').doc(data.uid).get();
  return result.data();
});

export const createUserTest = functions.https.onCall(
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

      return {result: 'success'};
    } catch (error) {
      if (error.code === 'auth/email-already-exists') {
        throw new functions.https.HttpsError(
          'already-exists',
          'The provided email is already in use by an existing user',
        );
      } else {
        // throw new functions.https.HttpsError("...other code....", "...");
        // If an error other than HttpsError is thrown,
        // your client instead receives an error with
        // the message INTERNAL and the code internal.
      }
    }
  },
);
