// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

const Sequelize = require("sequlize");

var sequelize = new Sequelize("TnP", "root", "password1", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
