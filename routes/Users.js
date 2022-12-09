const express = require("express");
// const { route } = require("./Contacts");

const router = express.Router();
const User = require("../models/Users");
const Contact = require("../models/Contacts");
// const

router.get("/", async (req, res) => {
  try {
    let rows = Contact.findAll();
    res.send(rows);
  } catch (err) {
    res.send(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const { email, password, passwordConfirm, username, firstName, lastName } =
      req.body;
    if (password !== passwordConfirm) {
      throw { error: "passwords do not match" };
    }
    let row = await User.create({
      email,
      username,
      password,
      firstName,
      lastName,
    });
    res.send(row);
  } catch (err) {
    res.send(err);
  }
});
router.put("/:id", async (req, res) => {});
router.delete("/:id", async (req, res) => {});

module.exports = router;
