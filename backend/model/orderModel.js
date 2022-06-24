const { Sequelize, DataTypes } = require("sequelize");
const apds = require("../database");

const OrdersModel = apds.define("orders", {
  rationCardNo: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  order: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  rationShopNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

console.log("Orders Table is OK");

module.exports = OrdersModel;
