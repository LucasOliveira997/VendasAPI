const express = require('express');

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const VendaController = require('./controllers/VendaController');
const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');


const routes = express.Router();

//Authenticate
routes.post('/authenticate', AuthController.store);

//Users
routes.post('/users',  UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.delete('/users/:user_id', UserController.delete);

//Vendas
routes.post('/vendas',  VendaController.store);
routes.get('/vendas', VendaController.index);
routes.delete('/vendas', VendaController.delete);

//clientes
routes.post('/clientes',  ClienteController.store);
routes.get('/clientes', ClienteController.index);
routes.get('/clientes', ClienteController.show);
routes.delete('/clientes', ClienteController.delete);

//produtos
routes.post('/produtos',  ProdutoController.store);
routes.get('/produtos', ProdutoController.index);
routes.get('/produtos', ProdutoController.show);
routes.delete('/produtos', ProdutoController.delete);

module.exports = routes;