let userRepository = require("../repository/userRepository");
//для запуска репозиториев.(упрощает их использование)
//бизнес логика для пидоров
module.exports = {

    getById : async function(userId) {
        console.log("SERVICE USED");
        return await userRepository.getById(userId);
    },

    createUser : async function(user) {
        console.log("SERVICE USED");
        return await userRepository.createUser(user);
    },

    getAllUsers : async function(page){
        console.log("Services getallusers used");
        return await userRepository.getAllUsers(page);
    }
}