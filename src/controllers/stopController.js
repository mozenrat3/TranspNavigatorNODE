
const stopService = require('../services/stopService');
//обработчик данных(типа валидации)
module.exports = {

getStopById: async function(req, res, next) {     
     // #swagger.description = 'Get stop by ID'
        /* #swagger.parameters['id'] = {
            description: 'Existing stop ID',
            type: 'object',
            required: true
        } */
        /* #swagger.responses[200] = {
            description: 'stop object'
            schema: { $ref: '#definitions/stop' }
        } */     
        try {           
            let stop = await stopService.getStopById(req.params.id);
            res.status(200).json(stop);
        }
        catch(error){
            next(error);
        }
    }
    ,
getAllStops: async function(req, res, next) {  
     // #swagger.description = 'Get all stops'
        /* #swagger.responses[200] = {
            description: 'array of all stops'
            schema: { $ref: '#definitions/stops' }
        } */       
        try {
            let stop1 = await stopService.getAllStops(req.params.id);
            res.status(200).json(stop1);
        }
        catch(error){
            next(error);
        }
    },

createStop: async function(req, res, next) { 
    // #swagger.description = 'Create stop'
        /* #swagger.responses[200] = {
            description: 'created stop'
            schema: { $ref: '#definitions/stop' }
        } */        
                try {
                    let data = {
                       name:req.body.name,
                       coords:req.body.coords
                    }       
                    let stop = await stopService.createStop(data);
                    res.status(200).json(stop);
                }
                catch(error){
                    next(error);
                }
            },
changeStopById: async function(req, res, next) {
      // #swagger.description = 'Change stop'
            /* #swagger.parameters['id'] = {
                description: 'Existing change stop ID',
                type: 'object',
                required: true
        } */
        /* #swagger.responses[200] = {
            description: 'change stop'
            schema: { $ref: '#definitions/stop' }
        } */        
        try {  
           // let userd = await userService.changeUserById(req.params.id);
           let stopid = req.params.id;
            let data1 = {
                name:req.body.name,
                coords:req.body.coords
            }      
           
            let stop = await stopService.changeStopById(data1,stopid);
            res.status(200).json(stop);
        }
        catch(error){
            next(error);
        }
    },

deleteStopById: async function(req, res, next) {  
     // #swagger.description = 'Delete stop'
         /* #swagger.parameters['id'] = {
            description: 'Existing delete stop ID',
            type: 'object',
            required: true
        } */
        /* #swagger.responses[200] = {
            description: 'delete stop'
            schema: { $ref: '#definitions/stop' }
        } */         
        try {  
            console.log("Controllers USED");   
           // let userd = await userService.changeUserById(req.params.id);
           let stopid = req.params.id;      
            let stop = await stopService.deleteStopById(stopid);
            res.status(200).json(stop);
        }
        catch(error){
            next(error);
        }
    }

}