'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Adding Foreign Key for 'userId' in 'Books' table (if not already added)
    await queryInterface.addConstraint('Books', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'fk_books_userId',
      references: {
        table: 'Users', // Referencing the 'Users' table
        field: 'id', // The key being referenced in the 'Users' table
      },
      onDelete: 'CASCADE', // Deletes all books when a user is deleted
    });
  },

  async down (queryInterface, Sequelize) {
    // Removing the foreign key constraints in case of rollback
    await queryInterface.removeConstraint('Books', 'fk_books_userId');
  }
};