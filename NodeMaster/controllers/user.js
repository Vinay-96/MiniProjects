const { v4: uuidV4 } = require("uuid");
const userModel = require("../models/user.model");
const { setUser } = require("../services/auth");

async function createUser(req, res) {
  const { name, email, password } = req.body;

  if (!name && !email && !password) {
    return res.send({ message: "please enter valid details" });
  }

  let createUser = await userModel.create({
    name: name,
    email: email,
    password: password,
  });

  //   return res
  //     .status(200)
  //     .send({ message: "user created successfully", createUser });

  return res.render("home");
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email && !password)
    return res.render("login", {
      error: "Enter user credentials",
    });

  let validUser = await userModel.findOne({ email, password });
  if (!validUser)
    return res.render("login", {
      error: "Invalid user credentials",
    });
  const token = setUser(validUser);
  res.cookie("token", token);
  return res.redirect("/");
}

module.exports = {
  createUser,
  login,
};
