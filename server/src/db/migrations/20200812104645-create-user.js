'use strict';
const {USER_CHARACTERISTIC: {GENDER: {OTHER, FEMALE, MALE}, ROLE: {CUSTOMER, ADMIN}}} = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      login: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(32),
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