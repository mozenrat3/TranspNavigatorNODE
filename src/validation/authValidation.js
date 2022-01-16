const Joi = require('joi');

const { object, string } = Joi.types();

exports.signupSchema = object.keys({
  email: string.email().required(),
  password: string.min(8).max(32).required(),
  passwordConfirm: string.min(8).max(32).required(),
  login: string.min(8).max(30).required(),
});

exports.loginSchema = object.keys({
    login: string.max(30).required(),
  password: string.min(8).max(32).required(),
});