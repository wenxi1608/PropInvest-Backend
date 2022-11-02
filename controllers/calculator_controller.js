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
      console.log("User:", user);

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
      console.log("Created:", created);
      return res.json("Created calculator");
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Unable to create calculator" });
    }
  },
};
