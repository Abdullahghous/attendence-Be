const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {};

const tableName = 'attendence';

const Attendence = sequelize.define('Attendence', {
  status: {
    type: Sequelize.STRING,
  }
}, { hooks, tableName });


module.exports = Attendence;
