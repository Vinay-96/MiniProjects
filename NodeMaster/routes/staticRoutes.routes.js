const express = require("express");
const router = express.Router();
const URLModel = require("../models/url.model");

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allShortUrls = await URLModel.find({
    createdBy: req.user._id,
  }).lean();
  res.render("home", { URLs: allShortUrls });
});

router.get("/signUp", async (req, res) => {
  res.render("signUp");
});

router.get("/login", async (req, res) => {
  res.render("login");
});
module.exports = router;
