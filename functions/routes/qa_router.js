const router = require("express").Router(); // eslint-disable-line
const auth = require("./../middleware/auth");
const QA = require("../models/QA_model");

router.post("/send_reply", auth, async (req, res) => {
  const idOfUser = req.user;
  try {
    const {first, second, third, fourth, fifth, sixth} = req.body;

    const newReply = new QA({
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      idOfUser,
    });
    const savedReply = await newReply.save();
    console.log(savedReply);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

module.exports = router;
