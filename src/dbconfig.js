// Import de bibliteca
const { Sequelize } = require('sequelize');

// Cria e sequencializa a instância
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db'
});

// Exporta a instância
module.exports = sequelize;