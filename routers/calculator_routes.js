const express = require("express");
const calculatorController = require("../controllers/calculator_controller");
const router = express.Router();
const authMiddleWare = require("../middleware/auth");

router.post("/create", authMiddleWare, calculatorController.createCalculator);

module.exports = router;
