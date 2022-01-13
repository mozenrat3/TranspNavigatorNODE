var express = require('express');
//const { route } = require('express/lib/application');
const routerTransport = express.Router();
//ставим контроллер по адресу/методу
const transportController = require('../controllers/transportController');

const errorMiddleware = require('../middleware/errorMiddleware');

const validate = require('../middleware/validate');
const { transportSchema } = require('../validation/transportValidation');

const authorize = require('../middleware/isAuthorized');
const isAdmin = require('../middleware/isAdmin');
routerTransport.use(authorize);
//routerTransport.use(isAdmin);

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).
//впилить isAdmin на определенное действие можно добавив его в аргументы ниже
routerTransport.get('/:id', transportController.getTransportById);
routerTransport.get('/',transportController.getAllTransports);
routerTransport.post('/',validate(transportSchema),transportController.createTransport);
routerTransport.put('/:id',validate(transportSchema),transportController.changeTransportById);
routerTransport.delete('/:id',transportController.deleteTransportById);



routerTransport.use(errorMiddleware);

module.exports = routerTransport;