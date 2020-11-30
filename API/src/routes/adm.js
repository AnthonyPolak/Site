const express = require('express');
const routes = express.Router();

const clientController = require('../controllers/ClientsController');


// rotas de cadastro de pessoa fisica
routes.get('/Clients/PF', clientController.findAll)
routes.get('/Clients/PF/:id', clientController.index)
routes.post('/Clients/PF', clientController.createClient)
routes.delete('/Clients/PF/:id', clientController.drop)
routes.put('/Clients/PF/:id', clientController.updateName)


// rotas de cadastro de pessoa fisica
routes.get('/Clients/PJ', clientController.findAll)
routes.get('/Clients/PJ/:id', clientController.index)
routes.post('/Clients/PJ', clientController.createClient)
routes.delete('/Clients/PJ/:id', clientController.drop)
routes.put('/Clients/PJ/:id', clientController.updateName)


module.exports = routes