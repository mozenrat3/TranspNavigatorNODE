
const reviewService = require('../services/reviewService');
//обработчик данных(типа валидации)
module.exports = {

getReviewById: async function(req, res, next) {       
        try {           
            let review = await reviewService.getReviewById(req.params.id);
            res.status(200).json(review);
        }
        catch(error){
            next(error);
        }
    }
    ,
getAllReviews: async function(req, res, next) {       
        try {
            let review1 = await reviewService.getAllReviews(req.params.id);
            res.status(200).json(review1);
        }
        catch(error){
            next(error);
        }
    },

createReview: async function(req, res, next) {       
                try {
                    let data = {
                        //user id уберу после авторизации
                        user_id : req.body.user_id,
                        route_id : req.body.route_id,
                        comment: req.body.comment,
                        rate: req.body.rate ,
                        dates: req.body.dates
                    }       
                    let review = await reviewService.createReview(data);
                    res.status(200).json(review);
                }
                catch(error){
                    next(error);
                }
            },
 changeReviewById: async function(req, res, next) {       
        try {  
           // let userd = await userService.changeUserById(req.params.id);
           let reviewid = req.params.id;
            let data1 = {
                user_id : req.body.user_id,
                route_id : req.body.route_id,
                comment: req.body.comment,
                rate: req.body.rate ,
                dates: req.body.dates
            }      
           
            let review = await reviewService.changeReviewById(data1,reviewid);
            res.status(200).json(review);
        }
        catch(error){
            next(error);
        }
    },

deleteReviewById: async function(req, res, next) {       
        try {  
            console.log("Controllers USED");   
           // let userd = await userService.changeUserById(req.params.id);
           let reviewid = req.params.id;      
            let review = await reviewService.deleteReviewById(reviewid);
            res.status(200).json(review);
        }
        catch(error){
            next(error);
        }
    }

}