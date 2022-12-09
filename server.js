const express = require("express");
const db = require("./config/database");

// config
const port = 3000;

// initial express
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/users", require("./routes/Users"));
app.use("/api/contacts", require("./routes/Contacts"));

// * Make sure db is live before bringing server up. I just wanted to test this out with IIFE.
// * It would probably be better to bring server up and provide service status to user.
(async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    // await db.close();

    // start server
    app.listen(port, () => console.log("Listening on port:", port));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
