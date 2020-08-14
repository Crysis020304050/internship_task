'use strict';
const bcrypt = require('bcrypt');
const {USER_CHARACTERISTIC: {ROLE: {ADMIN}, GENDER: {OTHER}}, FAKE_ENV: {SALT_ROUNDS}} = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashPassword = await bcrypt.hash('administrator', SALT_ROUNDS);
    const administrator = {
      firstName: 'administrator',
      lastName: 'administrator',
      login: 'administrator',
      email: 'administrator@gmail.com',
      password: hashPassword,
      birthday: '2019-02-01',
      creditCard: '4222222222222222',
      gender: OTHER,
      role: ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),

    };
    await queryInterface.bulkInsert('Users', [administrator], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
