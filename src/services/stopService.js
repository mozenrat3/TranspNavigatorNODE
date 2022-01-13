let stopRepository = require("../repository/stopRepository");
//для запуска репозиториев.(упрощает их использование)
module.exports = {

getStopById : async function(stopId) {
        return await stopRepository.getStopById(stopId);
    },

createStop : async function(stop) {
        return await stopRepository.createStop(stop);
    },

getAllStops : async function(stop){
        return await stopRepository.getAllStops(stop);
    },
changeStopById : async function(data1,stopid) {
        return await stopRepository.changeStopById(data1,stopid);
    },
deleteStopById : async function(stopid) {
        console.log("SERVICE USED");
        return await stopRepository.deleteStopById(stopid);
    }

}