'use strict';
module.exports = (sequelize, DataTypes) => {
  var toy = sequelize.define('toy', {
    name: DataTypes.STRING,
    note: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return toy;
};