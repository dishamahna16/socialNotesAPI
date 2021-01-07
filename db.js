const Sequelize = require("sequelize");
// Option 1: Passing a connection URI

const sequelize = new Sequelize("social_notes", "postgres", "open", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
