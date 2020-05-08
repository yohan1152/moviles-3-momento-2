'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProjectController = require('../Controllers/ProjectController');

var _ProjectController2 = _interopRequireDefault(_ProjectController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/v1/listappointments', _ProjectController2.default.listappointments);
router.get('/v1/getappointment', _ProjectController2.default.getappointment);
router.post('/v1/addappointment', _ProjectController2.default.addappointment);
router.put('/v1/updateappointment', _ProjectController2.default.updateappointment);
router.delete('/v1/deleteappointment', _ProjectController2.default.deleteappointment);

module.exports = router;