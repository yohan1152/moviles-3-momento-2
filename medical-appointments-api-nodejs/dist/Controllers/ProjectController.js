"use strict";

var _ProjectModel = require("../Models/ProjectModel");

var _ProjectModel2 = _interopRequireDefault(_ProjectModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    listappointments: async function listappointments(req, res) {
        var appointments = await _ProjectModel2.default.find({});

        var result = await _ProjectModel2.default.find({}).count();
        if (result > 0) {
            return res.status(200).json({ appointments: appointments });
        } else {
            return res.status(404).json({
                response: "No registered medical appointments."
            });
        }
    },
    getappointment: async function getappointment(req, res) {
        var id = req.query.id;

        var appointment = await _ProjectModel2.default.findById({ _id: id });
        if (appointment) {
            return res.status(200).json({ appointment: appointment });
        } else {
            return res.status(404).json({
                response: "The medical appointment could not be found."
            });
        }
    },
    addappointment: async function addappointment(req, res) {
        var _req$body = req.body,
            document = _req$body.document,
            name = _req$body.name,
            last_name = _req$body.last_name,
            birth_date = _req$body.birth_date,
            city_residence = _req$body.city_residence,
            neighborhood = _req$body.neighborhood,
            cellphone = _req$body.cellphone,
            appointment_date = _req$body.appointment_date,
            appointment_hour = _req$body.appointment_hour;

        var newAppointment = new _ProjectModel2.default({ document: document, name: name, last_name: last_name, birth_date: birth_date, city_residence: city_residence, neighborhood: neighborhood, cellphone: cellphone, appointment_date: appointment_date, appointment_hour: appointment_hour });

        var result = await newAppointment.save();

        if (result) {
            return res.status(200).json({
                response: "Successfully added medical appointment."
            });
        } else {
            return res.status(404).json({
                response: "The medical appointment could not be added."
            });
        }
    },
    updateappointment: async function updateappointment(req, res) {
        var id = req.query.id;
        var _req$body2 = req.body,
            document = _req$body2.document,
            name = _req$body2.name,
            last_name = _req$body2.last_name,
            birth_date = _req$body2.birth_date,
            city_residence = _req$body2.city_residence,
            neighborhood = _req$body2.neighborhood,
            cellphone = _req$body2.cellphone,
            appointment_date = _req$body2.appointment_date,
            appointment_hour = _req$body2.appointment_hour;


        var result = await _ProjectModel2.default.findByIdAndUpdate(id, { document: document, name: name, last_name: last_name, birth_date: birth_date, city_residence: city_residence, neighborhood: neighborhood, cellphone: cellphone, appointment_date: appointment_date, appointment_hour: appointment_hour });

        if (result) {
            return res.status(200).json({
                response: "Medical appointment updated successfully."
            });
        } else {
            return res.status(404).json({
                response: "The medical appointment could not be updated."
            });
        }
    },
    deleteappointment: async function deleteappointment(req, res) {
        var id = req.query.id;

        var result = await _ProjectModel2.default.findByIdAndDelete(id);

        if (result) {
            return res.status(200).json({
                response: "Successfully deleted medical appointment."
            });
        } else {
            return res.status(404).json({
                response: "The medical appointment could not be deleted."
            });
        }
    }
};

module.exports = controller;