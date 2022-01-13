var express = require('express');
//const { route } = require('express/lib/application');
const routerRoute = express.Router();
//ставим контроллер по адресу/методу
const routeController = require('../controllers/routeController');

const errorMiddleware = require('../middleware/errorMiddleware');
const validate = require('../middleware/validate');
const { routeSchema } = require('../validation/routeValidation');
const authorize = require('../middleware/isAuthorized');
routerRoute.use(authorize);
//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).



routerRoute.get('/:id', routeController.getRouteById);
routerRoute.get('/',routeController.getAllRoutes);
routerRoute.post('/',validate(routeSchema),routeController.createRoute);
routerRoute.put('/:id',validate(routeSchema),routeController.changeRouteById);
routerRoute.delete('/:id',routeController.deleteRouteById);



routerRoute.use(errorMiddleware);

module.exports = routerRoute;