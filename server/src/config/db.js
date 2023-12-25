const mongoose = require("mongoose");
const { mongoDatabase } = require("../secret");

mongoose
  .connect(mongoDatabase)
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
