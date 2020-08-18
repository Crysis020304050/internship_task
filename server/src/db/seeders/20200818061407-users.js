'use strict';
const bcrypt = require('bcrypt');
const {USER_CHARACTERISTIC: {ROLE: {CUSTOMER}, GENDER: {OTHER}}, FAKE_ENV: {SALT_ROUNDS}} = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];
    for (let i = 0; i < 100; i++) {
      const hashPassword = await bcrypt.hash(`freshcode${i}`, SALT_ROUNDS);
      const user = {
        firstName: `freshcode${i}`,
        lastName: `freshcode${i}`,
        login: `freshcode${i}`,
        email: `freshcode${i}@gmail.com`,
        password: hashPassword,
        birthday: '2019-02-01',
        creditCard: '4111111111111111',
        gender: OTHER,
        role: CUSTOMER
      };
      users.push(user);
    }
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};