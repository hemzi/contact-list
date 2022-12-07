const { Sequelize } = require("sequelize");
// TODO: scrub creds
module.exports = new Sequelize(
  "contactlist",
  "postgres",
  "He9hHgcvL5x8jNk0AXY6",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
