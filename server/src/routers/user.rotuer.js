const express = require("express");
const getUser = require("../controllers/user.controllers");
const userRouter = express.Router();

userRouter.get("/", getUser);

module.exports = userRouter;
