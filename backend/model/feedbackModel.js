const { Sequelize, DataTypes } = require("sequelize");
const apds = require("../database");

const feedbackModel = apds.define("feedback", {
  rationCardNo: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  cardHolder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  feedback: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  replayMessage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

console.log("Feedback Table is OK");

module.exports = feedbackModel;
