"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assess extends Model {
    static associate(models) {
      Assess.belongsTo(models.Users, {
        foreignKey: "recruiterId",
        as: "recruiter_assess",
      });
      Assess.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user_assess",
      });
    }
  }
  Assess.init(
    {
      message: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      recruiterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Assess",
    }
  );
  return Assess;
};
