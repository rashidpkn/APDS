const { Sequelize, DataTypes } = require('sequelize');
const apds = require('../database');

const shopModel = apds.define('shops', {
	rationShopNo: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	rationShopName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	shopKeeperName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	mobileNo: {
		type: DataTypes.STRING(13),
		allowNull: false,
		defaultValue: '+919562745975',
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: '123',
	},
});

console.log('Shop Table is OK');

module.exports = shopModel;
