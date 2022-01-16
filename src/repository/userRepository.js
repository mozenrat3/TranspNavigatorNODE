let sequelize = require('../models/index'); 

let NotFoundError = require("../errors/NotFoundError");
module.exports = {

    getById : async function(userId) {
        let user = await sequelize.models.user.findByPk(userId);
        console.log('user!:  ' + user);
        if(!user)
            throw(new NotFoundError('No such user'));

       return user;
    },
  //?
    getAllUsers : async function(user) {
      //  console.log("REPOS USED");
        let user1 = await sequelize.models.user.findAll({raw:true});
      //  console.log('user!:  ' + user);
        if(!user1)
            throw(new NotFoundError('No such user'));

       return user1;
    },

    createUser : async function(user) {
        let newuser = await sequelize.models.user.create(user);
        // let role = await sequelize.models.role.findOne(
        //     { where: {
        //         name : "User"
        //         } 
        //     }
        // );
        sequelize.models.users_roles.create({ 
            user_id: newuser.id, 
            role_id: 1 
          });
        //console.log("Role"+role);
       // newuser.addRole(role);
        return newuser;
    },
    changeUserById : async function(data1,userid) {
        //let user2 = await sequelize.models.user.findByPk(userId);
      //  let user2 = await sequelize.models.user.findByPk(userId);
       let user2 =  await sequelize.models.user.update(data1,{where:{id : userid}});
        if(!user2)
            throw(new NotFoundError('No such user'));

       return user2;
    },
    deleteUserById : async function(userid) {
        console.log("REPOS USED");
        //let user2 = await sequelize.models.user.findByPk(userId);
      //  let user2 = await sequelize.models.user.findByPk(userId)

      // let user2 =  await sequelize.models.user.destroy({where:{id : userid}});

      let user2 =  await this.getById(userid);
        if(!user2)
            throw(new NotFoundError('No such user'));
        await user2.destroy();
       return user2;
    },

    getByLogin : async function(login) {

      return await sequelize.models.user.findOne({ where : { login : login}});

  },


}
//репозитории отвечают за получение данных из бд. через запросы.