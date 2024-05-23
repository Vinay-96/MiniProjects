const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/create", userCtrl.createUser);
router.post("/login", userCtrl.login);

module.exports = router;
