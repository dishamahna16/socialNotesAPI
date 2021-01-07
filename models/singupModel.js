const Sequelize = require("sequelize");
const connection = require("../db");

const Singup = connection.define(
  "signup",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    mobile: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Singup;
