const Joi = require('joi');

const { object, number, string, date } = Joi.types();

exports.timetableSchema = object.keys({
    route_id: number.min(1).required(),
    arrival_time: date.iso().required(),
    weekdays: number.max(2).required()
});
