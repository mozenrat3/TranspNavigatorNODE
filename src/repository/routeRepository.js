let sequelize = require('../models/index'); 

let NotFoundError = require("../errors/NotFoundError");
module.exports = {

getRouteById : async function(routeId) {
        let route = await sequelize.models.routes.findByPk(routeId);
        console.log('route!:  ' + route);
        if(!route)
            throw(new NotFoundError('No such route'));
       return route;
    }, 
getAllRoutes : async function(transp) {
        let route1 = await sequelize.models.routes.findAll({raw:true});
        if(!route1)
            throw(new NotFoundError('No such route'));
       return route1;
    },

createRoute : async function(route) {
        let newroute = await sequelize.models.routes.create(route);
        return newroute;
    },
changeRouteById : async function(data1,routeid) {
       let route2 =  await sequelize.models.routes.update(data1,{where:{id : routeid}});
        if(!route2)
            throw(new NotFoundError('No such route'));
       return route2;
    },
deleteRouteById : async function(routeid) {
        console.log("REPOS USED");
       let route2 =  await sequelize.models.routes.destroy({where:{id : routeid}});
        if(!route2)
            throw(new NotFoundError('No such route'));

       return route2;
    }


}
//репозитории отвечают за получение данных из бд. через запросы.