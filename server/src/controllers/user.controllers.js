const User = require("../models/user.model");

const getUser = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const searchRegExp = new RegExp(".*" + search + ".*", "i");

    const filter = {
      isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchRegExp } },
        { email: { $regex: searchRegExp } },
        { phone: { $regex: searchRegExp } },
      ],
    };

    const users = await User.find(filter);
    res.status(200).send({
      message: "users ware returned",
      users,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getUser;

// db.example.find({
//   $or: [{ x: { $eq: 0 } }, { $expr: { $eq: [{ $divide: [1, "$x"] }, 3] } }],
// });
