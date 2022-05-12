const express = require("express");
const authMiddleware = require("../middleware/auth");
const { login, register } = require("../controllers/auth/account");
const { registerGames, findGames } = require("../controllers/games/games");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/register/games", authMiddleware, registerGames);
router.get("/games", authMiddleware, findGames);

module.exports = router;
