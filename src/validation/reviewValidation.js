const Joi = require('joi');

const { object, string, number, date } = Joi.types();

exports.reviewSchema = object.keys({
    user_id: number.min(1).required(),
    route_id: number.min(1).required(),
    comment: string.required().allow(null),
    rate : number.integer().min(0).max(5).required(),
    dates: date.iso().required()
});
