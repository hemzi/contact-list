const express = require("express");

const router = express.Router();
const db = require("../config/database");
const Contact = require("../models/Contacts");

// get all contacts
router.get("/", async (req, res) => {
  let rows = await Contact.findAll();
  res.send(rows);
});

// create contact
router.post("/", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  let row = await Contact.create({ firstName, lastName, email });
  console.log(row);
  if (row) {
    res.send(row);
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
