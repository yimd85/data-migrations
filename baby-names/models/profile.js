'use strict';
module.exports = (sequelize, DataTypes) => {
  var profile = sequelize.define('profile', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return profile;
};