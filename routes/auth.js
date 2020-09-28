const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc GET logged in user
// @acess Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route POST api/auth
// @desc Auth user & get token
// @acess Public
router.post("/", (req, res) => {
  res.send("Login user");
});

// always export the router
module.exports = router;
