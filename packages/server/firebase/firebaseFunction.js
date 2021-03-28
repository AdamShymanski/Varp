const { auth } = require("./firebase");

const registerUser = (email, password, fullName, username, age, country) => {
  return new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          displayName: fullName,
          username: username,
          // need to be stored in another db
          age: age,
          country: country
        });
      })
      .then(() => {
        resolve(true);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = {
  registerUser
};
