const Sequelize = require('sequelize');
const sequelize = require('../database');

const Token = sequelize.define('Token', {
  token: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  used: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Token;
