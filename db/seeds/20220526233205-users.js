'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Farros',
      email: 'farros.syafei@googlemail.com',
      encryptedPassword: await bcrypt.hash('Farros123', 10),
      googleId: '101006471511803127576',
      registeredVia: 'google',
      type_user: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
