const express = require("express");
const { getUsers, getUser } = require("../controllers/user.controllers");
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

module.exports = userRouter;
