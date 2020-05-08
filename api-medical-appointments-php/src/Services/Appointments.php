<?php
//The connection to the DB is included to be able to do the CRUD operations
require '../src/Config/db.php';

class Appointments {

    public function listAppointments(){
        
        $sql = "SELECT*FROM appointments";

        try{
           
            $db = new db();
            $db = $db->conectionDB();
            $result = $db->query($sql);

            if($result->rowCount() > 0){
                $appointments = $result->fetchAll(PDO::FETCH_OBJ); 
                echo json_encode(array("appointments"=>$appointments));
            }else{
                echo json_encode(array("response"=>"No registered medical appointments."));
            }
            $result = null;
            $db = null;
        }catch(PDOException $e){
            echo json_encode(array("error"=>$e.getMessage()));
        }
    }

    public function getIdAppointment($id){
        
        $sql = "SELECT*FROM appointments WHERE id_appointment = $id";

        try{
           
            $db = new db();
            $db = $db->conectionDB();
            $result = $db->query($sql);

            if($result->rowCount() > 0){
                $appointments = $result->fetchAll(PDO::FETCH_OBJ); 
                echo json_encode(array("appointment"=>$appointments));
            }else{
                echo json_encode(array("response"=>"The medical appointment could not be found."));
            }
            $result = null;
            $db = null;
        }catch(PDOException $e){
            echo json_encode(array("error"=>$e.getMessage()));
        }
    }

    public function addAppointment($document, $name, $last_name, $birth_date, $city_residence, $neighborhood, $cellphone, $appointment_date, $appointment_hour){
        
        $sql = "INSERT INTO appointments (document, name, last_name, birth_date, city_residence, neighborhood, cellphone, appointment_date, appointment_hour) VALUES (:document, :name, :last_name, :birth_date, :city_residence, :neighborhood, :cellphone, :appointment_date, :appointment_hour)";

        try{
           
            $db = new db();
            $db = $db->conectionDB();
            $result = $db->prepare($sql);

            $result->bindParam(':document',$document);
            $result->bindParam(':name',$name);
            $result->bindParam(':last_name',$last_name);
            $result->bindParam(':birth_date',$birth_date);
            $result->bindParam(':city_residence',$city_residence);
            $result->bindParam(':neighborhood',$neighborhood);
            $result->bindParam(':cellphone',$cellphone);
            $result->bindParam(':appointment_date',$appointment_date);
            $result->bindParam(':appointment_hour',$appointment_hour);
            

            if($result->execute() == true && $result->rowCount() > 0){
                echo json_encode(array("response"=>"Successfully added medical appointment."));
            }else{
                echo json_encode(array("response"=>"The medical appointment could not be added."));
            }

            $result = null;
            $db = null;
        }catch(PDOException $e){
            echo json_encode(array("error"=>$e.getMessage()));
        }
    }

    public function updateAppointment($id, $document, $name, $last_name, $birth_date, $city_residence, $neighborhood, $cellphone, $appointment_date, $appointment_hour){
        
        $sql = "UPDATE appointments 
                SET 
                    document = :document, 
                    name = :name,
                    last_name = :last_name,
                    birth_date = :birth_date,
                    city_residence = :city_residence,
                    neighborhood = :neighborhood,
                    cellphone = :cellphone,
                    appointment_date = :appointment_date,
                    appointment_hour = :appointment_hour
                WHERE id_appointment = :id";

        try{
           
            $db = new db();
            $db = $db->conectionDB();
            $result = $db->prepare($sql);

            $result->bindParam(':id',$id);
            $result->bindParam(':document',$document);
            $result->bindParam(':name',$name);
            $result->bindParam(':last_name',$last_name);
            $result->bindParam(':birth_date',$birth_date);
            $result->bindParam(':city_residence',$city_residence);
            $result->bindParam(':neighborhood',$neighborhood);
            $result->bindParam(':cellphone',$cellphone);
            $result->bindParam(':appointment_date',$appointment_date);
            $result->bindParam(':appointment_hour',$appointment_hour);

            if($result->execute() == true && $result->rowCount() > 0){
                echo json_encode(array("response"=>"Medical appointment updated successfully."));
            }else{
                echo json_encode(array("response"=>"The medical appointment could not be updated."));
            }
            
            $result = null;
            $db = null;
        }catch(PDOException $e){
            echo json_encode(array("error"=>$e.getMessage()));
        }
    }

    public function deleteAppointment($id){
        
        $sql = "DELETE FROM appointments WHERE id_appointment = :id";

        try{
           
            $db = new db();
            $db = $db->conectionDB();
            $result = $db->prepare($sql);

            $result->bindParam(':id',$id);

            if($result->execute() == true && $result->rowCount() > 0){
                echo json_encode(array("response"=>"Successfully deleted medical appointment."));
            }else{
                echo json_encode(array("response"=>"The medical appointment could not be deleted."));
            }
            
            $result = null;
            $db = null;
        }catch(PDOException $e){
            echo json_encode(array("error"=>$e.getMessage()));
        }
    }
}