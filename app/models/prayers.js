const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

let Prayer = sequelize.define("prayer", {
  Name: Sequelize.STRING,
  Location: Sequelize.STRING,
  Thoughts: Sequelize.STRING
});

//Sync with DB
Prayer.sync();
console.log("prayer sequelize");
module.exports = Prayer;
