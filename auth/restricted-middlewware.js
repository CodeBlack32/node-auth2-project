const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  // this is because the token includes`bearer ` this will make the token come back wrong
  // so split the the auth  check and it will check token code after space becuse its thew second element (bearer   is the first element [0])
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (token) {
      jwt.verify(token, secrets.jwt_secret, (err, decodedToken) => {
        if (err) {
          throw new Error(err);
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      });
    } else {
      throw new Error("Bad Authentication");
    }
  } catch (err) {
    res.status(401).json(err.message);
  }
};
