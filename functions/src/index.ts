import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// const serviceAccount = require('../keys/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

admin.initializeApp();

const db = admin.firestore();

interface RegisterProps {
  email: string;
  name: string;
  password: string;
  age: number;
  contry: string;
}

export const createUser = functions.https.onCall((data: RegisterProps) => {
  try {
    const {email, name, password, age, contry} = data;
    admin
      .auth()
      .createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: name,
        disabled: false,
      })
      .then((currentUser: {uid: string}) => {
        console.log('Successfully created new user');
        // Creating user's doc with custom info
        admin
          .firestore()
          .collection('users')
          .doc(currentUser.uid)
          .set({
            balance: 0,
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
  } catch (error) {
    return error;
  }
});

// : {email: string; password: string}
export const createUserTest = functions.https.onCall(async (data) => {
  const {email, password, age, name, country} = data;

  console.log(email);
  console.log(password);
  try {
    const user = await admin.auth().createUser({
      email: email,
      emailVerified: false,
      password: password,
      displayName: name,
      disabled: false,
    });

    db.collection('users').doc(user.uid).set({
      balance: 0,
      age: age,
      contry: country,
      dailyStreak: 0,
      surveyProgram: 0,
      referralProgram: 0,
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
      // throw new functions.https.HttpsError("...other code....", "...");
      // If an error other than HttpsError is thrown,
      // your client instead receives an error with
      // the message INTERNAL and the code internal.
    }
  }
});
