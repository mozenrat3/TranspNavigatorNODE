const Joi = require('joi');

const { object, number, string } = Joi.types();

exports.stopSchema = object.keys({
    name: string.min(3).max(40).required(),
    coords: string.required(),
});
