const express = require("express");
const router = express.Router();

const User = require("../models/User");
//POST submiting something to the data
// @route POST api/users
// @desc Register a user
// @acess Public
router.post("/", (req, res) => {
  res.send(req.body);
});

// always export the router
module.exports = router;
