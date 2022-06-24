const { Sequelize, DataTypes } = require("sequelize");
const apds = require("../database");

const userModule = apds.define("users", {
  rationCardNo: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  cardHolder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rationShopNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  mobileNo: {
    type: DataTypes.STRING(13),
    allowNull: false,
    defaultValue: "+919562756975",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "123",
  },
});

console.log("User Table is OK");

module.exports = userModule;
