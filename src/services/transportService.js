let transportRepository = require("../repository/transportRepository");
//для запуска репозиториев.(упрощает их использование)
module.exports = {

    getTransportById : async function(transpId) {
        return await transportRepository.getTransportById(transpId);
    },

    getAllTransports : async function(transp) {
        return await transportRepository.getAllTransports(transp);
    },

    createTransport : async function(transp){
        return await transportRepository.createTransport(transp);
    },
    changeTransportById : async function(data1,transpId) {
        return await transportRepository.changeTransportById(data1,transpId);
    },
    deleteTransportById : async function(transpId) {
        console.log("SERVICE USED");
        return await transportRepository.deleteTransportById(transpId);
    }

}