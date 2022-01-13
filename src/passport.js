const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userService = require('./services/userService');


let options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),//хранится в куки(берем jwt из берер)
    secretOrKey : 'secret'
}

passport.use(new JWTStrategy(options, function(jwt_payload, done) {//декодируем токен

    userService.getById(jwt_payload.user_id)//ищем пользователся по токену
    .then( (user) => {
        if(!user) 
            return done(null, false);

        return done(null, user);
    })
    .catch( (error) => {
        return done(error, false);
    });
})
);

module.exports = passport;