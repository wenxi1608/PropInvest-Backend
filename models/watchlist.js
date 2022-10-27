"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.watchlist.belongsToMany(models.user, {
        through: "userWatchlist",
        // foreignKey: "watchlistId",
        // otherKey: "watchlistId",
        // as: "users",
      });
    }
  }
  watchlist.init(
    {
      projectName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "watchlist",
    }
  );
  return watchlist;
};
