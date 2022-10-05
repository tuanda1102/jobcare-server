"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    static associate(models) {
      Jobs.belongsTo(models.Users, {
        foreignKey: "recruiterId",
        as: "recruiter_jobs",
      });
    }
  }
  Jobs.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      salary: DataTypes.STRING,
      level: DataTypes.STRING,
      skills: DataTypes.STRING,
      location: DataTypes.STRING,
      welfare: DataTypes.TEXT,
      gender: DataTypes.STRING,
      amount: DataTypes.STRING,
      workFrom: DataTypes.STRING,
      endDate: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      recruiterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Jobs",
    }
  );
  return Jobs;
};
