let routeRepository = require("../repository/routeRepository");
//для запуска репозиториев.(упрощает их использование)
module.exports = {

    getRouteById : async function(routeId) {
        return await routeRepository.getRouteById(routeId);
    },

    getAllRoutes : async function(route) {
        return await routeRepository.getAllRoutes(route);
    },

    createRoute : async function(route){
        return await routeRepository.createRoute(route);
    },
    changeRouteById : async function(data1,routeId) {
        return await routeRepository.changeRouteById(data1,routeId);
    },
    deleteRouteById : async function(routeId) {
        console.log("SERVICE USED");
        return await routeRepository.deleteRouteById(routeId);
    }

}