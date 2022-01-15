var express = require('express');

const router = express.Router();
//ставим контроллер по адресу/методу
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');


const errorMiddleware = require('../middleware/errorMiddleware');

const validate = require('../middleware/validate');
const { userSchema } = require('../validation/userValidation');
const { signupSchema, loginSchema } = require('../validation/authValidation');
const authorize = require('../middleware/isAuthorized');
const isAdmin = require('../middleware/isAdmin');
//

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).gf

//AUTH
router.post('/signup', validate(signupSchema) , userController.createUser /*
#swagger.tags = ['Users']
*/);
router.post('/login', validate(loginSchema), authController.logIn /*
#swagger.tags = ['Users']
*/);


router.use(authorize);

router.get('/:id', isAdmin, userController.getById /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/);
router.get('/', isAdmin, userController.getAllUsers /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/);

router.put('/:id', isAdmin, validate(userSchema), userController.changeUserById /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/);
router.delete('/:id', isAdmin, userController.deleteUserById /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/);


//router.post('/signup', userValidator, validate, userController.addUser);

router.use(errorMiddleware);

module.exports = router;