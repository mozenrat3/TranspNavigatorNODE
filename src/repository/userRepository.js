let sequelize = require('../models/index'); 

let NotFoundError = require("../errors/NotFoundError");
module.exports = {

    getById : async function(userId) {
        console.log("REPOS USED");
        let user = await sequelize.models.user.findByPk(userId);
        console.log('user!:  ' + user);
        if(!user)
            throw(new NotFoundError('No such user'));

       return user;
    },
  
    getAllUsers : async function(page) {
        let result = null;
        const usersOnPage = constants.usersOnPage;
    
        if(page){
    
          result = await User.findAll({offset: page * usersOnPage - usersOnPage, limit: usersOnPage});
    
        } else {
    
          result = await User.findAll();
    
        }
    
        for (let obj of result) {
    
          let roles = [];
          let rolesObj = await obj.getRoles();
    
          rolesObj.forEach(element => {
    
            roles.push(element.dataValues.name); 
    
          });
    
          obj.dataValues.roles = roles;
    
        }
    
        return result;
    },

    createUser : async function(user) {
        console.log("REPOS USED");


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
    }
}
//репозитории отвечают за получение данных из бд. через запросы.