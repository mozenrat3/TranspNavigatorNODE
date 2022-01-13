var express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
//ставим контроллер по адресу/методу
const userController = require('../controllers/userController');

const errorMiddleware = require('../middleware/errorMiddleware');

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).

router.get('/:id', userController.getById);
router.get('/',userController.getAllUsers);
router.post('/',userController.createUser);
router.put('/:id',userController.changeUserById);
router.delete('/:id',userController.deleteUserById);



router.use(errorMiddleware);

module.exports = router;