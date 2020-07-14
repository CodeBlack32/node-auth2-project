const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

server.get("/api", (req, res) => {
  const payload = {
    subject: "thisuser",
    userid: "Jblack",
    favorite: "writing",
  };

  const secret = "strongman";
  const options = {
    expiresIn: "30m",
  };
  const token = jwt.sign(payload, secret, options);

  res.json(token);
});

module.exports = server;
