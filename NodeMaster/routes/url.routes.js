const express = require("express");
const router = express.Router();
const { generateNewURL, redirectToSite, analyticsOfShortId, getAllShortIds } = require("../controllers/url");

router.post("/generate", generateNewURL);

router.get("/getAllIds" , getAllShortIds)

router.get("/:shortId", redirectToSite);

router.get("/analytics/:shortId", analyticsOfShortId)

module.exports = router;
