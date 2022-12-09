const { Sequalize, DataTypes } = require("sequelize");
const db = require("../config/database");

const Contact = db.define("contact", {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: "Invalid email format." },
    },
  },
  user_fk: { type: DataTypes.INTEGER, allowNull: true },
});

module.exports = Contact;
