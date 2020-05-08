"use strict";

var _mongoose = require("mongoose");

var AppointmentsSchema = new _mongoose.Schema({
    document: { type: String },
    name: { type: String },
    last_name: { type: String },
    birth_date: { type: String },
    city_residence: { type: String },
    neighborhood: { type: String },
    cellphone: { type: String },
    appointment_date: { type: String },
    appointment_hour: { type: String }
});

module.exports = (0, _mongoose.model)("appointments", AppointmentsSchema);