const { auth } = require("./firebase");

const registerUser = (email, password, fullName, username, age, country) => {
  return new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          fullName: fullName,
          username: username,
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
