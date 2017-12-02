'use strict';
module.exports = (sequelize, DataTypes) => {
  var asset = sequelize.define('asset', {
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    note: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return asset;
};