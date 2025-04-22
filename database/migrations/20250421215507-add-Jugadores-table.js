'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Jugadors', 'Jugadores');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Jugadores', 'Jugadors');
  }
};
