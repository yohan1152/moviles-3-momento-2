import {Schema, model} from 'mongoose';

const AppointmentsSchema = new Schema({
    document: {type: String},
    name: {type: String},
    last_name: {type: String},
    birth_date: {type: String},
    city_residence: {type: String},
    neighborhood: {type: String},
    cellphone: {type: String},
    appointment_date: {type: String},
    appointment_hour: {type: String},
});

module.exports = model("appointments",AppointmentsSchema);