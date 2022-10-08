"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobCategories extends Model {
    static associate(models) {
      // define association
      JobCategories.hasMany(models.Jobs, {
        foreignKey: "categoryId",
        as: "job_categories",
      });
    }
  }
  JobCategories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JobCategories",
    }
  );
  return JobCategories;
};
