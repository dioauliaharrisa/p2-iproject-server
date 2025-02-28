'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        "username" : null,
        "email" : "daharrisa@gmail.com",
        "password" : "$2a$04$hNN.Qab0ZO4yz1U98y.TiOGdBw1c3Rm82wr3P6cE\/BnureJGMSRlW",
        "createdAt" : "2022-02-22T11:59:35.395Z",
        "updatedAt" : "2022-02-22T11:59:35.395Z"
      },
      {
        "username" : null,
        "email" : "dio@dio.com",
        "password" : "$2a$04$8akXmfXFFE\/j8xmqwz3FVu.F157ozwTmuJphbnEhIeL1GHKdqO7Kq",
        "createdAt" : "2022-02-23T09:39:42.658Z",
        "updatedAt" : "2022-02-23T09:39:42.658Z"
      },
      {
        "username" : null,
        "email" : "d@d.com",
        "password" : "$2a$04$DaK23Gp10guvKZmR56ez.OkqGYt6JCzguKVzMFdlIAJrOcakOXmty",
        "createdAt" : "2022-02-23T13:44:48.966Z",
        "updatedAt" : "2022-02-23T13:44:48.966Z"
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
