let BadRequestError = require('../errors/BadRequestError');

module.exports = (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.body);
  
        next();
      } catch (err) {
        
        let errMsg = 'Validation Error: ';
  
        err.details.forEach((error) => {
          errMsg += `${error.message}. `;
        });
  
        errMsg = errMsg.trimEnd();
  
        next(new BadRequestError(errMsg));
      }
    };
  };