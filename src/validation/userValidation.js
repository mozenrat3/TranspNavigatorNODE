const Joi = require('joi');

const { object, string } = Joi.types();

exports.userSchema = object.keys({
  email: string.email().required(),
  password: string.min(8).max(32).required(),
  login: string.max(30).required()
});

