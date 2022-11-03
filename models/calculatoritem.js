"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class calculatoritem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.calculatoritem.belongsTo(models.calculator, {
        foreignKey: "calculatorId",
      });
    }
  }
  calculatoritem.init(
    {
      type: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      details: DataTypes.STRING,
      category: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      calculatorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "calculatoritem",
    }
  );
  return calculatoritem;
};
