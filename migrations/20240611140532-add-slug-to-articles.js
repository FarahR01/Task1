'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('articles', 'slug', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('articles', 'slug');
  }
};
