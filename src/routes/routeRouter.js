var express = require('express');
//const { route } = require('express/lib/application');
const routerRoute = express.Router();
//ставим контроллер по адресу/методу
const routeController = require('../controllers/routeController');

const errorMiddleware = require('../middleware/errorMiddleware');
const validate = require('../middleware/validate');
const  {routeSchema}  = require('../validation/routeValidation');
const authorize = require('../middleware/isAuthorized');
routerRoute.use(authorize);
const isAdmin = require('../middleware/isAdmin');
//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).



routerRoute.get('/:id', routeController.getRouteById/*
#swagger.tags = ['Routes']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerRoute.get('/',routeController.getAllRoutes/*
#swagger.tags = ['Routes']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerRoute.post('/',isAdmin,validate(routeSchema),routeController.createRoute/*
#swagger.tags = ['Routes']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerRoute.put('/:id',isAdmin,validate(routeSchema),routeController.changeRouteById/*
#swagger.tags = ['Routes']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerRoute.delete('/:id',isAdmin,routeController.deleteRouteById/*
#swagger.tags = ['Routes']
#swagger.security = [{ "bearerAuth": [] }]
*/);



routerRoute.use(errorMiddleware);

module.exports = routerRoute;