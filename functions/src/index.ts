// const serviceAccount = require('../keys/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://varp-ba7a7.firebaseio.com"
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
