import express from 'express';
import controller from '../Controllers/ProjectController'

const router = express.Router();

router.get('/v1/listappointments', controller.listappointments);
router.get('/v1/getappointment', controller.getappointment);
router.post('/v1/addappointment', controller.addappointment);
router.put('/v1/updateappointment', controller.updateappointment);
router.delete('/v1/deleteappointment', controller.deleteappointment);

module.exports = router;