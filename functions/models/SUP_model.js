const mongoose = require("mongoose");

const SetUpData = new mongoose.Schema({
  x: {type: String, required: true},
  accountsNumber: {type: Number, required: true},
  startDate: {type: Date, required: true},
});

module.exports = mongoose.model("MVP", SetUpData);
