
const transportService = require('../services/transportService');
//обработчик данных(типа валидации)
module.exports = {

getTransportById: async function(req, res, next) {       
   
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
   
        try {
            let transp1 = await transportService.getAllTransports(req.params.id);
            res.status(200).json(transp1);
        }
        catch(error){
            next(error);
        }
    },

createTransport: async function(req, res, next) {   
       
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