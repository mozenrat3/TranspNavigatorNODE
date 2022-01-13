let sequelize = require('../models/index'); 

let NotFoundError = require("../errors/NotFoundError");
module.exports = {

getTransportById : async function(transpId) {
        let transp = await sequelize.models.transport.findByPk(transpId);
        console.log('stop!:  ' + transp);
        if(!transp)
            throw(new NotFoundError('No such transp'));
       return transp;
    }, 
getAllTransports : async function(transp) {
        let transp1 = await sequelize.models.transport.findAll({raw:true});
        if(!transp1)
            throw(new NotFoundError('No such transp'));
       return transp1;
    },

createTransport : async function(transp) {
        let newtransp = await sequelize.models.transport.create(transp);
        return newtransp;
    },
changeTransportById : async function(data1,transpid) {
       let transp2 =  await sequelize.models.transport.update(data1,{where:{id : transpid}});
        if(!transp2)
            throw(new NotFoundError('No such transp'));
       return transp2;
    },
deleteTransportById : async function(transpid) {
        console.log("REPOS USED");
       let transp2 =  await sequelize.models.transport.destroy({where:{id : transpid}});
        if(!transp2)
            throw(new NotFoundError('No such transp'));

       return transp2;
    }


}
//репозитории отвечают за получение данных из бд. через запросы.