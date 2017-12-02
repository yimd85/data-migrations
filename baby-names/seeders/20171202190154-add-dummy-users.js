'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profiles',
    [{
      id: 1,
      firstname: 'dummy1',
      lastname: 'dummy1Last',
      bio: 'none',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: 2,
      firstname: 'dummy2',
      lastname: 'dummy2Last',
      bio: 'none',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: 3,
      firstname: 'dummy3',
      lastname: 'dummy3Last',
      bio: 'none',
      createdAt : new Date(),
      updatedAt : new Date()
    }]
    ,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profiles',  [{
        id: 1,
        firstname: 'dummy1',
        lastname: 'dummy1Last',
        bio: 'none',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 2,
        firstname: 'dummy2',
        lastname: 'dummy2Last',
        bio: 'none',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 3,
        firstname: 'dummy3',
        lastname: 'dummy3Last',
        bio: 'none',
        createdAt : new Date(),
        updatedAt : new Date()
      }]
      ,{});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
