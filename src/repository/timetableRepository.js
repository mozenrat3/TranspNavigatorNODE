let sequelize = require('../models/index'); 

let NotFoundError = require("../errors/NotFoundError");
module.exports = {

getTimetableById : async function(ttId) {
        let tt = await sequelize.models.timetable.findByPk(ttId);
        if(!tt)
            throw(new NotFoundError('No such tt'));
       return tt;
    }, 
getAllTimetables : async function(tt) {
        let tt1 = await sequelize.models.timetable.findAll({raw:true});
        if(!tt1)
            throw(new NotFoundError('No such tt'));
       return tt1;
    },

createTimetable : async function(tt) {
        let newtt = await sequelize.models.timetable.create(tt);
        return newtt;
    },
changeTimetableById : async function(data1,ttid) {
       let tt2 =  await sequelize.models.timetable.update(data1,{where:{id : ttid}});
        if(!tt2)
            throw(new NotFoundError('No such tt'));
       return route2;
    },
deleteTimetableById : async function(ttid) {
        console.log("REPOS USED");
       let tt2 =  await sequelize.models.timetable.destroy({where:{id : ttid}});
        if(!tt2)
            throw(new NotFoundError('No such tt'));

       return tt2;
    }


}
//репозитории отвечают за получение данных из бд. через запросы.