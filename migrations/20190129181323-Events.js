'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      return queryInterface.createTable('Events', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        date: {
          type: Sequelize.DATE
        },
        latitude: {
          type: Sequelize.FLOAT
        },
        longtitude: {
          type: Sequelize.FLOAT
        },
        capacity: {
          type: Sequelize.INTEGER
        },
        hashtags: {
          type: Sequelize.STRING
        },
        icon: {
          type: Sequelize.STRING
        },
        UserId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id'
          },
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      });
    }, 

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('Events');
    */
  }
};
