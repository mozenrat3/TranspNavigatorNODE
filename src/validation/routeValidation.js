const Joi = require('joi');

const { object, string, number, date } = Joi.types();

exports.reviewSchema = object.keys({
    number: number.integer().min(1).required(),
    length: number.integer().min(1).required(),
    stop_start: number.integer().min(1).required(),
    stop_end : number.integer().min(1).required()
});
