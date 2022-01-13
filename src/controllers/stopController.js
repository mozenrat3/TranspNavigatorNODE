
const stopService = require('../services/stopService');
//обработчик данных(типа валидации)
module.exports = {

getStopById: async function(req, res, next) {       
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
        try {
            let stop1 = await stopService.getAllStops(req.params.id);
            res.status(200).json(stop1);
        }
        catch(error){
            next(error);
        }
    },

createStop: async function(req, res, next) {       
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