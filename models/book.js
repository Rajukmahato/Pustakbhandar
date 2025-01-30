'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user' // Alias for the user associated with the book
      });
    }
  }

  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // Ensure this matches the table name of User model
        key: 'id'
      },
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};