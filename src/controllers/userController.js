const userService = require('../services/userService');
//обработчик данных(типа валидации)
module.exports = {

    getById: async function(req, res, next) {       
        try {

            console.log("Getbyid USED");
            
            let user = await userService.getById(req.params.id);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    },
    getAllUsers: async function(req, res, next) {       
        try {

            console.log("get all users USED");
            let page = null;

            if(req.query.page) {
              page = req.query.page;
            }
            let user = await userService.getAllUsers(page);
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
            console.log("post users USED");
            
            let user = await userService.createUser(data);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    }

}