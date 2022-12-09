const express = require("express");

const router = express.Router();
// const db = require("../config/database");
const Contact = require("../models/Contacts");

// get all contacts
router.get("/", async (req, res) => {
  let rows = await Contact.findAll();
  res.send(rows);
});

// get user contacts
router.get("/user/:id", async (req, res) => {
  let user_fk = req.params.id;
  let rows = await Contact.findAll({ where: { user_fk } });
  res.send(rows);
});

// create contact
router.post("/", async (req, res) => {
  const { firstName, lastName, email, user_id } = req.body;
  try {
    let row = await Contact.create({
      firstName,
      lastName,
      email,
      user_fk: user_id,
    });
    // console.log(row);
    res.send(row);
  } catch (err) {
    res.send({ error: err.errors[0].message });
  }
});

// update contact
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email } = req.body;
  let row = await Contact.update(
    { firstName, lastName, email },
    { where: { id }, returning: true }
  );
  res.send(row[1][0]);
});

// delete contact
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let row = await Contact.destroy({ where: { id } });
  res.send({ id: id });
});

module.exports = router;
