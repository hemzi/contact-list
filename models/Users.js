const { hash } = require("bcryptjs");
const { DataTypes } = require("sequelize");

const db = require("../config/database");

const User = db.define("user", {
  username: { type: DataTypes.STRING, allowNull: false },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: "Invalid email format." },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // ! revisit this and reference https://medium.com/@benjaminpwagner/using-sequelize-hooks-and-crypto-to-encrypt-user-passwords-5cf1a27513d9
  },
});

User.beforeCreate((user) => {
  return hash(user.password, 8).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
