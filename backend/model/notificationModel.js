const { Sequelize,DataTypes } = require('sequelize')
const apds = require('../database')


const notificationModel = apds.define('notification', {
    notification: {
        type: DataTypes.STRING,
        allowNull:false
    }
},
)

console.log('Notification Table is OK')

module.exports = notificationModel