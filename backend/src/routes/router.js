const express = require("express");
const authMiddleware = require("../middleware/auth");
const { login, register } = require("../controllers/auth/account");

const router = express.Router();

router.post("/searchUser", login);
router.post("/createUser", register);
router.get("/test", authMiddleware, (req, res) => {
	res.send({ ok: true, id: req.id });
});
module.exports = router;
