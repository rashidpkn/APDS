const { Sequelize, DataTypes } = require("sequelize");
const apds = require("../database");

const adminModel = apds.define("admin", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "123",
  },
});
console.log("Admin Table is OK");

module.exports = adminModel;
