const express = require("express");
const {
	findAccount,
	createAccount,
	findAllAccounts,
} = require("../controllers/auth/account");

const router = express.Router();

router.post("/searchUser", findAccount);
router.post("/createUser", createAccount);
router.get("/users", findAllAccounts);
module.exports = router;
