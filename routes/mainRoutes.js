const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/mainController");
const { route } = require("express/lib/router");

router.route("/dashboard").get(dashboard);
router.route("/login").get(login);

module.exports = router;
