'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allownull: false,
        autoincrement: true, 
        primarykey: true
      },
      name: {
        type: Sequelize.STRING,
        allownull: false
      },
      email: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allownull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('users');
  }
};
