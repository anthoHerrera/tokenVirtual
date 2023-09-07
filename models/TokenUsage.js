const Sequelize = require('sequelize');
const sequelize = require('../database');

const TokenUsage = sequelize.define('TokenUsage', {});

module.exports = TokenUsage;
