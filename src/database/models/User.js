const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, 
  {
    sequelize,
  }
);

module.exports = User;
