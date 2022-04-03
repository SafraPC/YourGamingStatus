const express = require("express");
const { login, register } = require("../controllers/auth/account");

const router = express.Router();

router.post("/searchUser", login);
router.post("/createUser", register);
module.exports = router;
