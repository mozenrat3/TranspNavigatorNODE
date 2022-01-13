const authService = require('../services/authService');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports = async (req, res, next) => {

    let isAdmin = await authService.isAdmin(req.user);

    if(isAdmin)
        next();
    else
        res.status(403).json(new ForbiddenError("no access"));
        
}