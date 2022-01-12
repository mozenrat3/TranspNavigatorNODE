var express = require('express');
const router = express.Router();
//ставим контроллер по адресу/методу
const userController = require('../controllers/userController');

const errorMiddleware = require('../middleware/errorMiddleware');

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).

router.get('/:id', userController.getById);
router.post('/',userController.createUser);
router.get('/',userController.getAllUsers)



router.use(errorMiddleware);

module.exports = router;