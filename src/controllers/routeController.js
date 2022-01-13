
const routeService = require('../services/routeService');
//обработчик данных(типа валидации)
module.exports = {

getRouteById: async function(req, res, next) {       
        try {           
            let route = await routeService.getRouteById(req.params.id);
            res.status(200).json(route);
        }
        catch(error){
            next(error);
        }
    }
    ,
getAllRoutes: async function(req, res, next) {       
        try {
            let route1 = await routeService.getAllRoutes(req.params.id);
            res.status(200).json(route1);
        }
        catch(error){
            next(error);
        }
    },

createRoute: async function(req, res, next) {       
                try {
                    let data = {
                        number:req.body.number,
                        length:req.body.length,
                        stop_start:req.body.stop_start,
                        stop_end:req.body.stop_end
                    }       
                    let route = await routeService.createRoute(data);
                    res.status(200).json(route);
                }
                catch(error){
                    next(error);
                }
            },
changeRouteById: async function(req, res, next) {       
        try {  
           // let userd = await userService.changeUserById(req.params.id);
           let routeid = req.params.id;
            let data1 = {
                number:req.body.number,
                length:req.body.length,
                stop_start:req.body.stop_start,
                stop_end:req.body.stop_end
            }      
           
            let route = await routeService.changeRouteById(data1,routeid);
            res.status(200).json(route);
        }
        catch(error){
            next(error);
        }
    },

deleteRouteById: async function(req, res, next) {       
        try {  
            console.log("Controllers USED");   
           // let userd = await userService.changeUserById(req.params.id);
           let routeid = req.params.id;      
            let route = await routeService.deleteRouteById(routeid);
            res.status(200).json(route);
        }
        catch(error){
            next(error);
        }
    }

}