// Import das bibliotecas próprias
const Cliente = require("./cliente");

// Retorna uma lista com todos os clientes
const getLista = async (request, response) => {
    const clientes = await Cliente.findAll();
    response.status(200).json(clientes);
};

// Procura um cliente pelo id
const getCliente = async (request, response) => {
    const cliente = await Cliente.findByPk(request.params.clienteId);
    response.status(200).json(cliente);
};

const inserir = async (request, response) => {
    const cliente = await Cliente.create(request.body);
    response.status(201).json({
        message: `Cliente inserido com 
     clienteId: ${request.params.clienteId}`
    })
};

const alterar = async (request, response) => {
    const cliente = await Cliente.findByPk(request.params.clienteId);
    if (cliente) {
        await cliente.update(request.body);
        response.status(200).json({
            message: `Cliente modificado com
     clienteId: ${request.params.clienteId}`
        });
    } else {
        response.status(404).json({
            message: `Cliente não encontrado 
     com clienteId: ${request.params.clienteId}`
        });
    }
};

const excluir = async (request, response) => {
    const cliente = await Cliente.findByPk(request.params.clienteId);
    if (cliente) {
        await cliente.destroy();
        response.status(200).json({
            message: `Cliente excluído com
        clienteId: ${cliente.clienteId}`
        });
    } else {
        response.status(404).json({
            message: `Cliente não encontrado com
        clienteId: ${request.params.clienteId}`
        });
    }
};

// Exporta as funções
module.exports = {
    getLista, getCliente, inserir, alterar, excluir
};