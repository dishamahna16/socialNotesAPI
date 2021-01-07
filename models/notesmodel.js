const Sequelize = require("sequelize");
const connection = require("../db");

const Notes = connection.define(
  "notes",
  {
    heading: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id: {
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
module.exports = Notes;

//get  /getnotes nootes.findAll()

//post /addnotes (heading, description, userEmail), notes.create({})
