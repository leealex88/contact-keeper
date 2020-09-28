const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc Get all users contacts
// @acess Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route POST api/contacts
// @desc Add new contacts
// @acess Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route PUT api/contacts/:id
// @desc Update contact
// @acess Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route DELETE api/contacts/:id
// @desc Delete contact
// @acess Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

// always export the router
module.exports = router;
