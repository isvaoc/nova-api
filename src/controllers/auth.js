"use strict";

const UserAuth = require("../models/userAuth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN } = require("../config/config");

const authCtrl = {
  register: async (req, res) => {
    try {
      const { first_name, last_name, email, password } = req.body;
      if (!(first_name && last_name && email && password)) {
        res.status(400).send("All fields are required");
      }
      const oldUser = await UserAuth.findOne({ email });
      if (oldUser) {
        res.status(409).send("The user already exists, please login");
      }
      const encryptedPassword = bcrypt.hash(password, 10);
      const token = jwt.sign({ email }, TOKEN, { expiresIn: "7d" });
      const user = new UserAuth({
        first_name,
        last_name,
        email: email.toLowerCase(),
        password: await encryptedPassword,
        token,
      });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send("Email and password are required");
      }
      const user = await UserAuth.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ email }, TOKEN, { expiresIn: "7d" });
        user.token = token;
        const { _id } = user;
        res.status(201).json({ _id, email });
      } else res.status(400).send("Invalid credentials");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = authCtrl;
