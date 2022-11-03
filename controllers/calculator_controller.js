const db = require("../models");

module.exports = {
  createCalculator: async (req, res) => {
    const formData = req.body;
    console.log(formData);

    try {
      //1. Get user
      const user = await db.user.findOne({
        where: { email: res.locals.userAuth.data.email },
      });

      //2. create in calculator DB
      const created = await db.calculator.create({
        projectName: formData.projectName,
        propertyValue: formData.propertyValue,
        loanAmount: formData.loanAmount,
        loanTenure: formData.loanTenure,
        interestRate: formData.interestRate,
        propertiesOwned: formData.propertiesOwned,
        residency: formData.residency,
        userId: user.dataValues.id,
      });
      return res.json("Created calculator");
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Unable to create calculator" });
    }
  },

  getCalculators: async (req, res) => {
    try {
      const user = await db.user.findOne({
        where: { email: res.locals.userAuth.data.email },
      });

      const calculatorList = await db.calculator.findAll({
        where: { userId: user.dataValues.id },
      });
      return res.json(calculatorList);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Unable to get calculator list" });
    }
  },

  addIncomeExpense: async (req, res) => {
    console.log(req.body);
    try {
      const user = await db.user.findOne({
        where: { email: res.locals.userAuth.data.email },
      });
      const calculator = await db.calculator.findOne({
        where: {
          userId: user.dataValues.id,
          projectName: req.body.projectName,
        },
      });
      console.log(calculator);
      const created = await db.calculatoritem.create({
        type: req.body.item.type,
        date: req.body.item.date,
        details: req.body.item.details,
        category: req.body.item.category,
        amount: req.body.item.amount,
        calculatorId: calculator.dataValues.id,
      });
      return res.json("Item created");
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Unable to get create this item" });
    }
  },

  getItems: async (req, res) => {
    try {
      const user = await db.user.findOne({
        where: { email: res.locals.userAuth.data.email },
      });

      const calculator = await db.calculator.findOne({
        where: {
          userId: user.dataValues.id,
          projectName: req.params.projectName,
        },
      });
      const calculatorItems = await db.calculatoritem.findAll({
        where: { calculatorId: calculator.dataValues.id },
      });

      return res.json(calculatorItems);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Unable to get calculator list" });
    }
  },

  updateIncomeExpense: async (req, res) => {
    itemToUpdate = req.body.item;
    valueToUpdate = req.body.editItems;
    console.log(valueToUpdate);
    console.log(itemToUpdate);

    try {
      const updatedItem = await db.calculatoritem.update(
        { ...valueToUpdate },
        {
          where: {
            id: itemToUpdate.id,
          },
          returning: true,
          plain: true,
        }
      );
      if (!updatedItem) {
        res.json({ error: "Unable to find item in DB" });
      }
      return res.json(updatedItem[1]);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Unable to update item" });
    }
  },
};
