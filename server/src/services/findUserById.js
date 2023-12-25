const mongoose = require("mongoose");
const User = require("../models/user.model");
const createError = require("http-errors");

const findUserById = async (id) => {
  try {
    const options = { password: 0 };
    const user = await User.findById(id, options);

    if (!user) {
      throw createError(404, "no users found");
    }
    return user;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createError(400, "Invalid User Id");
    }
    throw error;
  }
};
module.exports = { findUserById };
