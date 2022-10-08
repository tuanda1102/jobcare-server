"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("JobCategories", "id", {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    });
    await queryInterface.removeColumn("JobCategories", "description");
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
