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
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
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
      recruiterId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Jobs",
    }
  );
  return Jobs;
};
