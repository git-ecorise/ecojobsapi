const express = require("express");
const router = express.Router();
const userCtrl = require("../_ecojobs_controllers/_ecojobs_users_controller");

router.post("/signup", userCtrl.signupUser);
router.post("/signin", userCtrl.signinUser)

module.exports = router;
