const express = require("express");
const router = express.Router();

//POST submiting something to the data
// @route POST api/users
// @desc Register a user
// @acess Public
router.post("/", (req, res) => {
  res.send("Register a user");
});

// always export the router
module.exports = router;
