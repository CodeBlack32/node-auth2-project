module.exports = (role) => {
  return function (req, res, next) {
    if (
      req.decodedToken.departments &&
      req.decodedToken.departments.includes(department)
    ) {
      next();
    } else {
      res.status(403).json({ message: "no bueno!" });
    }
  };
};
