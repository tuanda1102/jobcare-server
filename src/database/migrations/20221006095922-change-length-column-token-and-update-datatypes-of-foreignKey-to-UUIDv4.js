"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "refreshToken", {
      type: Sequelize.STRING(350),
    });
    await queryInterface.changeColumn("Assesses", "message", {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.changeColumn("Assesses", "userId", {
      allowNull: false,
      type: Sequelize.UUID,
    });
    await queryInterface.changeColumn("Assesses", "recruiterId", {
      allowNull: false,
      type: Sequelize.UUID,
    });
    await queryInterface.changeColumn("Jobs", "recruiterId", {
      allowNull: false,
      type: Sequelize.UUID,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
