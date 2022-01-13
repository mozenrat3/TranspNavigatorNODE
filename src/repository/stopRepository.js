let sequelize = require('../models/index'); 

let NotFoundError = require("../errors/NotFoundError");
module.exports = {

getStopById : async function(stopId) {
        let stop = await sequelize.models.stops.findByPk(stopId);
        console.log('stop!:  ' + stop);
        if(!stop)
            throw(new NotFoundError('No such stops'));
       return stop;
    }, 
getAllStops : async function(stop) {
        let stop1 = await sequelize.models.stops.findAll({raw:true});
        if(!stop1)
            throw(new NotFoundError('No such stops'));
       return stop1;
    },

createStop : async function(stop) {
        let newstop = await sequelize.models.stops.create(stop);
        return newstop;
    },
changeStopById : async function(data1,stopid) {
       let stop2 =  await sequelize.models.stops.update(data1,{where:{id : stopid}});
        if(!stop2)
            throw(new NotFoundError('No such stops'));
       return stop2;
    },
deleteStopById : async function(stopid) {
        console.log("REPOS USED");
       let stop2 =  await sequelize.models.stops.destroy({where:{id : stopid}});
        if(!stop2)
            throw(new NotFoundError('No such stops'));

       return stop2;
    }


}
//репозитории отвечают за получение данных из бд. через запросы.