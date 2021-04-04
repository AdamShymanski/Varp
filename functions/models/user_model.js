const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 8},
  username: {type: String, minlength: 4, unique: true},
  fullName: {type: String, required: true, minlength: 4},
});

module.exports = mongoose.model("user", userSchema);
