const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig"); //Configurações do banco

// Define o modelo para Cliente
class Cliente extends Model { }
Cliente.init({
    clienteId: {
        type: Sequelize.INTEGER, autoIncrement: true,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING
}, { sequelize, modelName: 'cliente' }
);

sequelize.sync(); // Sincroniza o modelo com o banco de dados

module.exports = Cliente; // Exporta o modelo
