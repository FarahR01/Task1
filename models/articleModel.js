const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  format: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Ensure slug is unique
  },
}, {
  tableName: 'articles',
});

module.exports = Article;
