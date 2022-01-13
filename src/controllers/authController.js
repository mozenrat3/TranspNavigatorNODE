const express = require('express');
const BadRequestError = require('../errors/BadRequestError');
const authService = require('../services/authService');

let authController = {
    
    logIn : async function (req, res, next) {

        if(!req.body.login || !req.body.password)
            res.status(400).json(new BadRequestError("empty fields"))

        let user = {
            login : req.body.login,
            password : req.body.password
        }
        
        try {
            let token = await authService.logIn(user);//записывает в  токен id юзера
            res.status(200).json(token);
        }
        catch(error) {
            next(error);
        }

    },
    
    
    
};
module.exports = authController;