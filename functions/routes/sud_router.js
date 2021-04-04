const router = require("express").Router(); // eslint-disable-line
const SUP = require("../models/SUP_model");

router.post("/get_data", async (req, res) => {
  try {
    const mongoData = await SUP.findOne({_id: "603bdcff0580dd4236d5441e"});
    res.json({response: mongoData.accountsNumber});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

module.exports = router;
