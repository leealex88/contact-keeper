const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  check,
  validationResult,
} = require("express-validator");
const auth = require("../middleware/auth");
const config = require("config");

const User = require("../models/User");
// @route GET api/auth
// @desc GET logged in user
// @acess Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password"
    );
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Service Error");
  }
});

// @route POST api/auth
// @desc Auth user & get token
// @acess Public
router.post(
  "/",
  [
    check("email", "Please include valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne();

      if (!user) {
        return res
          .status(400)
          .json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res
          .status(400)
          .json({ msg: "Invalid Credentials" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// always export the router
module.exports = router;
