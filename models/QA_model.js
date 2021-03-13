const mongoose = require("mongoose");

const questionnaireAnswers = new mongoose.Schema({
  first: { type: String, required: true },
  second: { type: Boolean, required: true },
  third: { type: Number, required: true },
  fourth: { type: Number, required: true },
  fifth: { type: Number, required: true },
  sixth: { type: String, required: true },
  idOfUser: { type: String, required: true },
});

module.exports = QA = mongoose.model("questionnaire_answer", questionnaireAnswers);
