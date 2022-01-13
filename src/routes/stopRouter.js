var express = require('express');
//const { route } = require('express/lib/application');
const routerStop = express.Router();
//ставим контроллер по адресу/методу
const stopController = require('../controllers/stopController');

const errorMiddleware = require('../middleware/errorMiddleware');

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).

routerStop.get('/:id', stopController.getStopById);
routerStop.get('/',stopController.getAllStops);
routerStop.post('/',stopController.createStop);
routerStop.put('/:id',stopController.changeStopById);
routerStop.delete('/:id',stopController.deleteStopById);



routerStop.use(errorMiddleware);

module.exports = routerStop;