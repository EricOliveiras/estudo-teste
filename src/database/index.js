const Sequelize = require('sequelize');

const configDB = require('./config/config');
const User = require('./models/User');

const connection = new Sequelize(configDB);

connection.authenticate()
  .then(() => { console.log('Connection has been established successfully.'); })
  .catch(err => { console.error('Unable to connect to the database:', err); });

User.init(connection);

module.exports = connection;