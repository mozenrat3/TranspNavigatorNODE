let sequelize = require('../models/index'); 

let NotFoundError = require("../errors/NotFoundError");
module.exports = {

getReviewById : async function(reviewId) {
        let review = await sequelize.models.reviews.findByPk(reviewId);
        console.log('review!:  ' + review);
        if(!review)
            throw(new NotFoundError('No such review'));
       return review;
    }, 
getAllReviews : async function(review) {
        let review1 = await sequelize.models.reviews.findAll({raw:true});
        if(!review1)
            throw(new NotFoundError('No such review'));
       return review1;
    },

createReview : async function(review) {
        let newreview = await sequelize.models.reviews.create(review);
        return newreview;
    },
changeReviewById : async function(data1,reviewid) {
       let review2 =  await sequelize.models.reviews.update(data1,{where:{id : reviewid}});
        if(!review2)
            throw(new NotFoundError('No such review'));
       return review2;
    },
deleteReviewById : async function(reviewid) {
        console.log("REPOS USED");
       let review2 =  await sequelize.models.reviews.destroy({where:{id : reviewid}});
        if(!review2)
            throw(new NotFoundError('No such review'));

       return review2;
    }


}
//репозитории отвечают за получение данных из бд. через запросы.