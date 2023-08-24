const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.post("/register", userController.register);
router.post("/activate", userController.activateAccount);
router.post("/login", userController.login);

module.exports = router;
