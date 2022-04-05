const express = require("express");
const authMiddleware = require("../middleware/auth");
const { login, register } = require("../controllers/auth/account");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

module.exports = router;
