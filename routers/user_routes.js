const express = require("express");
const userController = require("../controllers/user_controller");
const router = express.Router();
const authMiddleWare = require("../middleware/auth");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/details", authMiddleWare, userController.userDetails);

module.exports = router;
