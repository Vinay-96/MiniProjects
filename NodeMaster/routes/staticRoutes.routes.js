const express = require("express");
const router = express.Router();
const URLModel = require("../models/url.model");
const { restrictTo } = require("../middlewares/auth");

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const allShortUrls = await URLModel.find({}).lean();
  res.render("home", { URLs: allShortUrls });
});

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
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
