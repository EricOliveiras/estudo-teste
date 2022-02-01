const Sequelize = require('sequelize');

const configDB = require('./config/config');

const connection = new Sequelize(configDB);

connection.authenticate()
  .then(() => { console.log('Connection has been established successfully.'); })
  .catch(err => { console.error('Unable to connect to the database:', err); });

module.exports = connection;