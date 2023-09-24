const express = require("express");
const router = express.Router();
const URLModel = require("../models/url.model");

router.get("/", async (req, res) => {
  const allShortUrls = await URLModel.find({}).lean();
  res.render("home", { URLs: allShortUrls });
});

module.exports = router;
