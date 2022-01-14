const userService = require('../services/userService');
//обработчик данных(типа валидации)
module.exports = {
    
    getById: async function(req, res, next) {       
        // #swagger.description = 'Get user by ID'
        /* #swagger.parameters['id'] = {
            description: 'Existing user ID',
            type: 'object',
            required: true
        } */
        /* #swagger.responses[200] = {
            description: 'user object'
            schema: { $ref: '#definitions/user' }
        } */
        try {           
            let user = await userService.getById(req.params.id);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    },
    getAllUsers: async function(req, res, next) {   
         // #swagger.description = 'Get all users'
        /* #swagger.responses[200] = {
            description: 'array of all users'
            schema: { $ref: '#definitions/users' }
        } */ 
        try {
            let user = await userService.getAllUsers(req.params.id);
            res.status(200).json(user);
        }
        catch(error){
            next(error);
        }
    },

    createUser: async function(req, res, next) {       
          // #swagger.description = 'Create user'
        /* #swagger.responses[200] = {
            description: 'created user'
            schema: { $ref: '#definitions/user' }
        } */ 
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
              // #swagger.description = 'Change user'
            /* #swagger.parameters['id'] = {
                description: 'Existing change user ID',
                type: 'object',
                required: true
        } */
        /* #swagger.responses[200] = {
            description: 'change user'
            schema: { $ref: '#definitions/user' }
        } */ 
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
        // #swagger.description = 'Delete user'
         /* #swagger.parameters['id'] = {
            description: 'Existing delete user ID',
            type: 'object',
            required: true
        } */
        /* #swagger.responses[200] = {
            description: 'delete user'
            schema: { $ref: '#definitions/user' }
        } */ 
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