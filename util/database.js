const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'pradeep', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;