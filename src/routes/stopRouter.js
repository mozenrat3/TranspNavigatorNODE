var express = require('express');
//const { route } = require('express/lib/application');
const routerStop = express.Router();
//ставим контроллер по адресу/методу
const stopController = require('../controllers/stopController');

const errorMiddleware = require('../middleware/errorMiddleware');

const validate = require('../middleware/validate');
const { stopSchema } = require('../validation/stopValidation');
const authorize = require('../middleware/isAuthorized');
routerStop.use(authorize);
const isAdmin = require('../middleware/isAdmin');
//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).

routerStop.get('/:id', stopController.getStopById/*
#swagger.tags = ['Stops']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerStop.get('/',stopController.getAllStops/*
#swagger.tags = ['Stops']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerStop.post('/',isAdmin,validate(stopSchema),stopController.createStop/*
#swagger.tags = ['Stops']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerStop.put('/:id',isAdmin,validate(stopSchema),stopController.changeStopById/*
#swagger.tags = ['Stops']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerStop.delete('/:id',isAdmin,stopController.deleteStopById/*
#swagger.tags = ['Stops']
#swagger.security = [{ "bearerAuth": [] }]
*/);



routerStop.use(errorMiddleware);

module.exports = routerStop;