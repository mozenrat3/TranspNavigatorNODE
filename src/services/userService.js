let userRepository = require("../repository/userRepository");
//для запуска репозиториев.(упрощает их использование)
module.exports = {

    getById : async function(userId) {
        return await userRepository.getById(userId);
    },

    createUser : async function(user) {
        return await userRepository.createUser(user);
    },

    getAllUsers : async function(user){
        return await userRepository.getAllUsers(user);
    },
    changeUserById : async function(data1,userid) {
        console.log("SERVICE USED");
        return await userRepository.changeUserById(data1,userid);
    },
    deleteUserById : async function(userid) {
        console.log("SERVICE USED");
        return await userRepository.deleteUserById(userid);
    }
}