<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../src/Services/Appointments.php';

$app = new \Slim\App;

//GET method to list all medical appointments
$app->get('/api/v1/listappointments', function (Request $request, Response $response) {
    $Appointments = new Appointments();
    return $Appointments->listAppointments();
});

//GET method to search for medical appointments by ID
$app->get('/api/v1/getappointment', function (Request $request, Response $response) {
    $id = $request->getQueryParam('id');
    
    $Appointments = new Appointments();
    return $Appointments->getIdAppointment($id);
});

//POST method to add new medical appointment
$app->post('/api/v1/addappointment', function (Request $request, Response $response) {
    $document = $request->getParam('document');
    $name = $request->getParam('name');
    $last_name = $request->getParam('last_name');
    $birth_date = $request->getParam('birth_date');
    $city_residence = $request->getParam('city_residence');
    $neighborhood = $request->getParam('neighborhood');
    $cellphone = $request->getParam('cellphone');
    $appointment_date = $request->getParam('appointment_date');
    $appointment_hour = $request->getParam('appointment_hour');
    
    $Appointments = new Appointments();
    return $Appointments->addAppointment($document,$name,$last_name,$birth_date,$city_residence,$neighborhood,$cellphone,$appointment_date,$appointment_hour);
});

//PUT method to update a medical appointment
$app->put('/api/v1/updateappointment', function (Request $request, Response $response) {
    $id = $request->getQueryParam('id');
    $document = $request->getParam('document');
    $name = $request->getParam('name');
    $last_name = $request->getParam('last_name');
    $birth_date = $request->getParam('birth_date');
    $city_residence = $request->getParam('city_residence');
    $neighborhood = $request->getParam('neighborhood');
    $cellphone = $request->getParam('cellphone');
    $appointment_date = $request->getParam('appointment_date');
    $appointment_hour = $request->getParam('appointment_hour');
    
    $Appointments = new Appointments();
    return $Appointments->updateAppointment($id,$document,$name,$last_name,$birth_date,$city_residence,$neighborhood,$cellphone,$appointment_date,$appointment_hour);
});

//DELETE method to delete a medical appointment
$app->delete('/api/v1/deleteappointment', function (Request $request, Response $response) {
    $id = $request->getQueryParam('id');

    $Appointments = new Appointments();
    return $Appointments->deleteAppointment($id);
});
