"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Jobs, {
        foreignKey: "recruiterId",
        as: "recruiter_jobs",
      });
      Users.hasMany(models.Assess, {
        foreignKey: "userId",
        as: "user_assess",
      });
      Users.hasMany(models.Assess, {
        foreignKey: "recruiterId",
        as: "recruiter_assess",
      });
      Users.hasMany(models.Applicants, {
        foreignKey: "userId",
        as: "user_applicants",
      });
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      fullname: DataTypes.STRING,
      role: DataTypes.STRING,
      refreshToken: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      avatar: DataTypes.STRING,
      birth: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
