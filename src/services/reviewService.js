let reviewRepository = require("../repository/reviewRepository");
//для запуска репозиториев.(упрощает их использование)
module.exports = {

getReviewById : async function(reviewId) {
        return await reviewRepository.getReviewById(reviewId);
    },

createReview : async function(review) {
        return await reviewRepository.createReview(review);
    },

getAllReviews : async function(review){
        return await reviewRepository.getAllReviews(review);
    },
changeReviewById : async function(data1,reviewid) {
        console.log("SERVICE USED");
        return await reviewRepository.changeReviewById(data1,reviewid);
    },
deleteReviewById : async function(reviewid) {
        console.log("SERVICE USED");
        return await reviewRepository.deleteReviewById(reviewid);
    }

}