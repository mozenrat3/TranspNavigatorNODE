const express = require('express');
const userRepository = require('../repository/userRepository');
const jwt = require('jwt-simple');
const BadRequestError = require('../errors/BadRequestError');


module.exports = authService = {

    logIn : async function(instance) {
        let user = await userRepository.getByLogin(instance.login);//получаем юзера по переданному логину(в контроллере)
        
        if(!user)
            throw(new Error('Login or password is incorrect'));
    
        if(instance.password != user.password)
            throw(new Error('Login or password is incorrect'));

        let payload = {
            user_id: user.id
        }

        let token = jwt.encode(payload, 'secret');//создание токена по заданнному секретному ключу и юзер айди(см в passport)

        return {token: token};    
    },

    isAdmin : async function(instance) {

        let user = await userRepository.getById(instance.id);

        let roles = await user.getRoles();

        if(!roles)
            return false;

        for(let role of roles) {
            if(role.name == "Admin")   
                return true;
              
        }

        return false;
    }
    
}