
const transportService = require('../services/transportService');
//обработчик данных(типа валидации)
module.exports = {

getTransportById: async function(req, res, next) {       
     // #swagger.description = 'Get transport by ID'
        /* #swagger.parameters['id'] = {
            description: 'Existing transport ID',
            type: 'object',
            required: true
        } */
        /* #swagger.responses[200] = {
            description: 'transport object'
            schema: { $ref: '#definitions/transport' }
        } */   
        try {           
            let transp = await transportService.getTransportById(req.params.id);
            res.status(200).json(transp);
        }
        catch(error){
            next(error);
        }
    }
    ,
getAllTransports: async function(req, res, next) {      
     // #swagger.description = 'Get all transports'
        /* #swagger.responses[200] = {
            description: 'array of all transports'
            schema: { $ref: '#definitions/transports' }
        } */   
        try {
            let transp1 = await transportService.getAllTransports(req.params.id);
            res.status(200).json(transp1);
        }
        catch(error){
            next(error);
        }
    },

createTransport: async function(req, res, next) {   
    // #swagger.description = 'Create transport'
        /* #swagger.responses[200] = {
            description: 'created transport'
            schema: { $ref: '#definitions/transport' }
        } */      
                try {
                    let data = {
                       type:req.body.type
                    }       
                    let transp = await transportService.createTransport(data);
                    res.status(200).json(transp);
                }
                catch(error){
                    next(error);
                }
            },
changeTransportById: async function(req, res, next) {   
      // #swagger.description = 'Change transport'
            /* #swagger.parameters['id'] = {
                description: 'Existing change transport ID',
                type: 'object',
                required: true
        } */
        /* #swagger.responses[200] = {
            description: 'change transport'
            schema: { $ref: '#definitions/transport' }
        } */     
        try {  
           // let userd = await userService.changeUserById(req.params.id);
           let transpid = req.params.id;
            let data1 = {
                type:req.body.type
            }      
           
            let transp = await transportService.changeTransportById(data1,transpid);
            res.status(200).json(transp);
        }
        catch(error){
            next(error);
        }
    },

deleteTransportById: async function(req, res, next) {       
     // #swagger.description = 'Delete transport'
         /* #swagger.parameters['id'] = {
            description: 'Existing delete transport ID',
            type: 'object',
            required: true
        } */
        /* #swagger.responses[200] = {
            description: 'delete transport'
            schema: { $ref: '#definitions/transport' }
        } */    
        try {  
            console.log("Controllers USED");   
           // let userd = await userService.changeUserById(req.params.id);
           let transpid = req.params.id;      
            let transp = await transportService.deleteTransportById(transpid);
            res.status(200).json(transp);
        }
        catch(error){
            next(error);
        }
    }

}