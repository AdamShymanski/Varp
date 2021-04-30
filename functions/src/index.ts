import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://varp-ba7a7.firebaseio.com"
});

export const createUser = functions.https.onCall((data, context) => {
  try {
    const { email, name, password, age, contry } = data;
    admin
      .auth()
      .createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: name,
        disabled: false
      })
      .then(currentUser => {
        console.log("Successfully created new user");
        // Creating user's doc with custom info
        admin
          .firestore()
          .collection("users")
          .doc(currentUser.uid)
          .set({
            age: age,
            contry: contry,
            dailyStreak: 0,
            surveyProgram: 0,
            referralProgram: 0,
            referralCode: currentUser.uid
          })
          .then(() => {
            console.log("Document successfully written!");
            return currentUser;
          })
          .catch(error => {
            console.error("Error writing document: ", error);
            return error;
          });
      })
      .catch(error => {
        console.log("Error creating new user:", error);
        return error;
      });
  } catch (error) {
    return error;
  }
});

export const createUserTest = functions.https.onCall((data, context) => {
  const { email, password } = data;

  return admin
    .auth()
    .createUser({
      email: email,
      emailVerified: false,
      password: password,
      disabled: false
    })
    .then(user => {
      return {
        result: "success",
        user: user
      };
    })
    .catch(error => {
      if (error.code === "auth/email-already-exists") {
        throw new functions.https.HttpsError(
          "already-exists",
          "The provided email is already in use by an existing user"
        );
      } else {
        // throw new functions.https.HttpsError("...other code....", "...");
        // If an error other than HttpsError is thrown, your client instead receives an error with the message INTERNAL and the code internal.
      }
    });
});


export const test = functions.https.onCall((data, context) => {
  try{
      return {
       result: data
      };
  }catch{
     return {err: "blad"}
  }
      
});