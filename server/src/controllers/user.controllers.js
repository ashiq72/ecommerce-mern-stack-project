const getUser = (req, res, next) => {
  try {
    res.send("product route ");
  } catch (error) {
    next(error);
  }
};
module.exports = getUser;
