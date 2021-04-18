const { Sequelize } = require('sequelize');
module.exports = new Sequelize('codegig', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres',
});