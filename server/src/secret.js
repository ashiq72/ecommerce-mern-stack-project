require("dotenv").config();
const serverPort = process.env.PORT;
const mongoDatabase = process.env.DATABASE;

module.exports = { serverPort, mongoDatabase };
