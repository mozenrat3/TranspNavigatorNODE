const Joi = require('joi');

const { object, number, string, date } = Joi.types();

exports.transportSchema = object.keys({
    type: string.min(1).max(10).required()
});
