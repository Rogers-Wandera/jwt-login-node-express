const express = require("express");
const { login,Dashboard } = require("../controllers/main");
const authenticcationMiddleWare = require("../middleware/auth");

const router = express.Router();

router.route("/dashboard").get(authenticcationMiddleWare, Dashboard);
router.route("/login").post(login);

module.exports = router;