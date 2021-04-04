const router = require("express").Router(); // eslint-disable-line
const jwt = require("jsonwebtoken");
const {registerUser, loginUser} = require("../firebase/firebaseFunction");
const auth = require("../middleware/auth");
const User = require("../models/user_model");

const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
const strongPasswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/; // eslint-disable-line
const onlyLetterNumberRegEx = /^[A-Za-z0-9]+$/;
const onlyLettersRegEx = /^[A-Za-z\s]+$/;

router.post("/register", async (req, res) => {
  const errorContainer = [];
  try {
    const {
      email,
      username,
      fullName,
      password,
      passwordCheck,
      age,
      country,
    } = req.body;

    // validation forms inputs
    if (fullName) {
      const fullNameLenght = fullName.length;
      if (fullNameLenght <= 3) {
        errorContainer.push({
          fnf: "Name is too short. It muste be above 3 characters",
        });
      }
      if (fullNameLenght >= 25) {
        errorContainer.push({
          fnf: "Name is too long. It muste be below 25 characters",
        });
      }
      if (!onlyLettersRegEx.test(fullName)) {
        errorContainer.push({
          fnf: "Name contains not allowed special characters",
        });
      }
    } else errorContainer.push({fnf: "This field is required"});

    if (email) {
      if (emailRegEx.test(email)) {
        const findEmail = await User.findOne({email: email});
        if (findEmail) {
          errorContainer.push({
            ef: "An account with this email already exists",
          });
        }
      } else errorContainer.push({ef: "Email is not valid"});
    } else errorContainer.push({ef: "This field is required"});

    if (username) {
      const usernameLenght = username.length;
      if (usernameLenght >= 3) {
        if (usernameLenght <= 25) {
          if (onlyLetterNumberRegEx.test(username)) {
            const findUsername = await User.findOne({username: username});
            if (findUsername) {
              errorContainer.push({uf: "This username is already taken"});
            }
          } else {
            errorContainer.push({
              uf: "Username contains not allowed special characters",
            });
          }
        } else {
          errorContainer.push({
            uf: "Username is too long. It muste be below 25 characters",
          });
        }
      } else {
        errorContainer.push({
          uf: "Username is too short. It muste be above 3 characters",
        });
      }
    } else errorContainer.push({uf: "This field is required"});

    if (password) {
      if (!strongPasswordRegEx.test(password)) {
        errorContainer.push({pf: "Password is too weak"});
      }
    } else errorContainer.push({pf: "This field is required"});

    if (passwordCheck) {
      if (password !== passwordCheck) {
        errorContainer.push({pcf: "Passwords must be the same"});
      }
    } else errorContainer.push({pcf: "This field is required"});

    if (errorContainer.length == 0) {
      const response = await registerUser(
          email,
          password,
          fullName,
          username,
          age,
          country,
      );
      if (response == true) {
        res.json({user_saved: true});
      } else {
        errorContainer.push({firebase: response});
        return res.status(400).json(errorContainer);
      }
    } else {
      return res.status(400).json(errorContainer);
    }
  } catch (err) {
    errorContainer.push({error: err.message});
    res.status(500).json(errorContainer);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const {email, password} = req.body;

    // validate
    if (!email || !password) {
      return res.status(400).json({msg: "Not all fields have been entered"});
    }
    const user = await loginUser(email, password);
    const token = await user.user.getIdToken();
    const toresp = {
      token,
      user: {
        id: user.user.uid,
        fullName: user.user.displayName,
      },
    };
    res.json(toresp);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

module.exports = router;
