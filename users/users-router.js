const router = require("express").Router();
const checkDepartment = require("../auth/check-role-middleware");

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middlewware");

//  Student is a (switch)Department that is being checked... (this paremeter can be "ADMIN", "STAFF", "TEAM, etc...)
router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;

// restricted, checkDepartment("STUDENT"),
