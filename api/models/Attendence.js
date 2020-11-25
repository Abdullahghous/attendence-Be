const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {};

const tableName = 'attendence';

const Attendence = sequelize.define('Attendence', {
  mark: {
    type: Sequelize.STRING,
  },
  fine: {
    type:Sequelize.STRING
  }
}, { hooks, tableName });


module.exports = Attendence;
