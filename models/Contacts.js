const { Sequalize, DataTypes } = require("sequelize");
const db = require("../config/database");

const Contact = db.define("contact", {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Contact;
