
const routeService = require('../services/routeService');
//обработчик данных(типа валидации)
module.exports = {

getRouteById: async function(req, res, next) {      
     // #swagger.description = 'Get route by ID'
        /* #swagger.parameters['id'] = {
            description: 'Existing route ID',
            type: 'object',
            required: true
        } */
        /* #swagger.responses[200] = {
            description: 'route object'
            schema: { $ref: '#definitions/route' }
        } */    
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
     // #swagger.description = 'Get all routes'
        /* #swagger.responses[200] = {
            description: 'array of all routes'
            schema: { $ref: '#definitions/routes' }
        } */        
        try {
            let route1 = await routeService.getAllRoutes(req.params.id);
            res.status(200).json(route1);
        }
        catch(error){
            next(error);
        }
    },

createRoute: async function(req, res, next) { 
    // #swagger.description = 'Create route'
        /* #swagger.responses[200] = {
            description: 'created route'
            schema: { $ref: '#definitions/route' }
        } */        
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
      // #swagger.description = 'Change route'
            /* #swagger.parameters['id'] = {
                description: 'Existing change route ID',
                type: 'object',
                required: true
        } */
        /* #swagger.responses[200] = {
            description: 'change route'
            schema: { $ref: '#definitions/route' }
        } */      
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
     // #swagger.description = 'Delete route'
         /* #swagger.parameters['id'] = {
            description: 'Existing delete route ID',
            type: 'object',
            required: true
        } */
        /* #swagger.responses[200] = {
            description: 'delete route'
            schema: { $ref: '#definitions/route' }
        } */          
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