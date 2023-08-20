const express = require("express");
const router = express.Router();
const { generateNewURL, redirectToSite, analyticsOfShortId } = require("../controllers/url");

router.post("/", generateNewURL);

router.get("/:shortId", redirectToSite);

router.get("/analytics/:shortId", analyticsOfShortId)

module.exports = router;
