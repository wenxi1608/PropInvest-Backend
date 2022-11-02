'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('calculators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectName: {
        type: Sequelize.STRING
      },
      propertyValue: {
        type: Sequelize.INTEGER
      },
      loanAmount: {
        type: Sequelize.INTEGER
      },
      loanTenure: {
        type: Sequelize.INTEGER
      },
      interestRate: {
        type: Sequelize.INTEGER
      },
      propertiesOwned: {
        type: Sequelize.INTEGER
      },
      residency: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('calculators');
  }
};