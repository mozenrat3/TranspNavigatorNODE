
const timetableService = require('../services/timetableService');
//обработчик данных(типа валидации)
module.exports = {

    getTimetableById: async function(req, res, next) {       
        try {           
            let tt = await timetableService.getTimetableById(req.params.id);
            res.status(200).json(tt);
        }
        catch(error){
            next(error);
        }
    }
    ,
    getAllTimetables: async function(req, res, next) {       
        try {
            let tt1 = await timetableService.getAllTimetables(req.params.id);
            res.status(200).json(tt1);
        }
        catch(error){
            next(error);
        }
    },

    createTimetable: async function(req, res, next) {       
                try {
                    let data = {
                        route_id:req.body.route_id,
                        weekdays:req.body.weekdays,
                        arrival_time:req.body.arrival_time
                    }       
                    let tt = await timetableService.createTimetable(data);
                    res.status(200).json(tt);
                }
                catch(error){
                    next(error);
                }
            },
            changeTimetableById: async function(req, res, next) {       
        try {  
           // let userd = await userService.changeUserById(req.params.id);
           let ttid = req.params.id;
            let data1 = {
                route_id:req.body.route_id,
                weekdays:req.body.weekdays,
                arrival_time:req.body.arrival_time
            }      
           
            let tt = await timetableService.changeTimetableById(data1,ttid);
            res.status(200).json(tt);
        }
        catch(error){
            next(error);
        }
    },

    deleteTimetableById: async function(req, res, next) {       
        try {  
            console.log("Controllers USED");   
           // let userd = await userService.changeUserById(req.params.id);
           let ttid = req.params.id;      
            let tt = await timetableService.deleteTimetableById(ttid);
            res.status(200).json(tt);
        }
        catch(error){
            next(error);
        }
    }

}