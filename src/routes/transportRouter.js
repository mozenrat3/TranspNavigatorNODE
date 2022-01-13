var express = require('express');
//const { route } = require('express/lib/application');
const routerTransport = express.Router();
//ставим контроллер по адресу/методу
const transportController = require('../controllers/transportController');

const errorMiddleware = require('../middleware/errorMiddleware');

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).

routerTransport.get('/:id', transportController.getTransportById);
routerTransport.get('/',transportController.getAllTransports);
routerTransport.post('/',transportController.createTransport);
routerTransport.put('/:id',transportController.changeTransportById);
routerTransport.delete('/:id',transportController.deleteTransportById);



routerTransport.use(errorMiddleware);

module.exports = routerTransport;