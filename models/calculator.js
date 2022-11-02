"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class calculator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.calculator.belongsTo(models.user, {
        foreignKey: "userId",
      });
    }
  }
  calculator.init(
    {
      projectName: DataTypes.STRING,
      propertyValue: DataTypes.INTEGER,
      loanAmount: DataTypes.INTEGER,
      loanTenure: DataTypes.INTEGER,
      interestRate: DataTypes.FLOAT,
      propertiesOwned: DataTypes.INTEGER,
      residency: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "calculator",
    }
  );
  return calculator;
};
