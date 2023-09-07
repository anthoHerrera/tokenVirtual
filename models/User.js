const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  secret: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
