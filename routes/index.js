const express = require("express");

const { getLoginPage } = require("../controller");
const { getMainPage } = require("../controller/main");

const router = express.Router();

router.get("/", getLoginPage);
router.get("/:page", getMainPage);
module.exports = router;