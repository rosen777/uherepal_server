'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    age: DataTypes.INTEGER,
    interest: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longtitude: DataTypes.FLOAT,
  }, {});
  
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Event, {
        foreignKey: 'UserId',
	      onDelete: 'CASCADE'
        })
  };
  return User;
};