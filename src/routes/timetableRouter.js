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

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).

routerTimetable.get('/:id', timetableController.getTimetableById);
routerTimetable.get('/',timetableController.getAllTimetables);
routerTimetable.post('/', validate(timetableSchema), timetableController.createTimetable);
routerTimetable.put('/:id', validate(timetableSchema),timetableController.changeTimetableById);
routerTimetable.delete('/:id',timetableController.deleteTimetableById);



routerTimetable.use(errorMiddleware);

module.exports = routerTimetable;