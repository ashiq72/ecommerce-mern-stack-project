const User = require("../models/user.model");

const getUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send({
      message: "users ware returned",
      users,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getUser;
