var express = require('express');
//const { route } = require('express/lib/application');
const routerTimetable = express.Router();
//ставим контроллер по адресу/методу
const timetableController = require('../controllers/timetableController');

const errorMiddleware = require('../middleware/errorMiddleware');

const validate = require('../middleware/validate');
const { timetableSchema } = require('../validation/timetableValidation');
const authorize = require('../middleware/isAuthorized');
routerTimetable.use(authorize);
const isAdmin = require('../middleware/isAdmin');

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).

routerTimetable.get('/:id', timetableController.getTimetableById/*
#swagger.tags = ['Timetables']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerTimetable.get('/',timetableController.getAllTimetables/*
#swagger.tags = ['Timetables']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerTimetable.post('/',isAdmin, validate(timetableSchema), timetableController.createTimetable/*
#swagger.tags = ['Timetables']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerTimetable.put('/:id',isAdmin, validate(timetableSchema),timetableController.changeTimetableById/*
#swagger.tags = ['Timetables']
#swagger.security = [{ "bearerAuth": [] }]
*/);
routerTimetable.delete('/:id',isAdmin,timetableController.deleteTimetableById/*
#swagger.tags = ['Timetables']
#swagger.security = [{ "bearerAuth": [] }]
*/);



routerTimetable.use(errorMiddleware);

module.exports = routerTimetable;