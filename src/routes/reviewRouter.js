var express = require('express');
//const { route } = require('express/lib/application');
const routerReview = express.Router();
//ставим контроллер по адресу/методу
const reviewController = require('../controllers/reviewController');

const errorMiddleware = require('../middleware/errorMiddleware');

//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (конечной точке),
// которым является URI (или путь), и определенному методу запроса HTTP (GET, POST и т.д.).

routerReview.get('/:id', reviewController.getReviewById);
routerReview.get('/',reviewController.getAllReviews);
routerReview.post('/',reviewController.createReview);
routerReview.put('/:id',reviewController.changeReviewById);
routerReview.delete('/:id',reviewController.deleteReviewById);



routerReview.use(errorMiddleware);

module.exports = routerReview;