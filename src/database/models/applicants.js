"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Applicants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Applicants.belongsTo(models.Jobs, {
        foreignKey: "jobId",
        as: "job_applicants",
      });
      Applicants.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user_applicants",
      });
      Applicants.belongsTo(models.Images);
    }
  }
  Applicants.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      coverLetter: DataTypes.TEXT,
      jobId: DataTypes.UUID,
      userId: DataTypes.UUID,
      imageId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Applicants",
    }
  );
  return Applicants;
};
