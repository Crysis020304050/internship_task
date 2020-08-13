'use strict';
const {USER_CHARACTERISTIC: {GENDER: {OTHER, FEMALE, MALE}, ROLE: {CUSTOMER, ADMIN}}} = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      firstName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      login: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATE
      },
      creditCard: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM(OTHER, MALE, FEMALE),
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM(CUSTOMER, ADMIN),
        allowNull: false,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};