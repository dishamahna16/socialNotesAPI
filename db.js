const Sequelize = require("sequelize");
// Option 1: Passing a connection URI

const sequelize = new Sequelize("social_notes", "postgres", "12345678", {
  host: "aa1g5yao73kurmg.cpumudghbgc2.us-east-2.rds.amazonaws.com",
  dialect: "postgres",
});

module.exports = sequelize;

// https://github.com/dishamahna16/socialnotesAPI - bACKEND LINK

// https://github.com/dishamahna16/Socialnotes_React - FRONTEDN LINK
