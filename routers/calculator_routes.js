const express = require("express");
const calculatorController = require("../controllers/calculator_controller");
const router = express.Router();
const authMiddleWare = require("../middleware/auth");

router.post("/create", authMiddleWare, calculatorController.createCalculator);
router.post(
  "/add-income-expense",
  authMiddleWare,
  calculatorController.addIncomeExpense
);
router.put(
  "/update-income-expense",
  authMiddleWare,
  calculatorController.updateIncomeExpense
);
router.get(
  "/items/:projectName",
  authMiddleWare,
  calculatorController.getItems
);
router.get("/", authMiddleWare, calculatorController.getCalculators);
module.exports = router;
