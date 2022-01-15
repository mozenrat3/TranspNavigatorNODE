const userService = require('../services/userService');
//обработчик данных(типа валидации)
module.exports = {
    
    getById: async function(req, res, next) {       
      
        try {           
            let user = await userService.getById(req.params.id);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    },
    getAllUsers: async function(req, res, next) {   
       
        try {
            let user = await userService.getAllUsers(req.params.id);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    },

    createUser: async function(req, res, next) {       
        
        try {
            let data = {
                login: req.body.login,
                password: req.body.password,
                email:req.body.email
            }       
            let user = await userService.createUser(data);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    },
    changeUserById: async function(req, res, next) {       
        try {  
         
           let userid = req.params.id;
            let data1 = {
                login: req.body.login,
                password: req.body.password,
                email:req.body.email
            }      
           
            let user = await userService.changeUserById(data1,userid);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    },

    deleteUserById: async function(req, res, next) {       
        try {  
       
            console.log("Controllers USED");   
           // let userd = await userService.changeUserById(req.params.id);fd
           let userid = req.params.id;      
            let user = await userService.deleteUserById(userid);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    }

}