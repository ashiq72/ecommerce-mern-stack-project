const express = require("express");
const { seedUser } = require("../controllers/seed.controller");

const seedRouter = express.Router();

seedRouter.get("/users", seedUser);

module.exports = seedRouter;
