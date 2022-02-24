"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pets",
      [
        {
          name: "Rheza",
          hunger: 0,
          craving: "Bone, meat, sausages",
          OwnerID: 2,
          createdAt: "2022-02-23T09:39:56.933Z",
          updatedAt: "2022-02-23T09:39:56.933Z",
        },
        {
          name: "ddd",
          hunger: 130,
          craving: "Food, Bone, meat, sausages",
          OwnerID: 3,
          createdAt: "2022-02-23T13:44:57.480Z",
          updatedAt: "2022-02-23T17:06:21.464Z",
        },
        {
          name: "Wewe",
          hunger: 70,
          craving: "Food, bone, meat, sausages",
          OwnerID: 1,
          createdAt: "2022-02-22T13:55:53.821Z",
          updatedAt: "2022-02-24T05:03:24.507Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pets", null, {});
  },
};