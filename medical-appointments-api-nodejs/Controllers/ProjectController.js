import Appointment from '../Models/ProjectModel';

let controller = {
    listappointments: async (req,res) =>{
        const appointments = await Appointment.find({});

        const result = await Appointment.find({}).count();
        if(result > 0){
            return res.status(200).json({appointments});
        }else{
            return res.status(404).json({
                response: "No registered medical appointments."
            });
        }
    },
    getappointment: async (req,res) =>{
        const id = req.query.id;
        
        const appointment = await Appointment.findById({_id: id});
        if(appointment){
            return res.status(200).json({appointment});
        }else{
            return res.status(404).json({
                response: "The medical appointment could not be found."
            });
        }
        
    },
    addappointment: async (req, res) =>{
        const {document, name, last_name, birth_date, city_residence, neighborhood, cellphone, appointment_date, appointment_hour} = req.body;
        const newAppointment = new Appointment({document, name, last_name, birth_date, city_residence, neighborhood, cellphone, appointment_date, appointment_hour});
        
        const result = await newAppointment.save();

        if(result){
            return res.status(200).json({
                response: "Successfully added medical appointment."
            });
        }else{
            return res.status(404).json({
                response: "The medical appointment could not be added."
            });
        }
    },
    updateappointment: async (req,res) =>{
        const id = req.query.id;
        const {document, name, last_name, birth_date, city_residence, neighborhood, cellphone, appointment_date, appointment_hour} = req.body;

        const result = await Appointment.findByIdAndUpdate(id,{document, name, last_name, birth_date, city_residence, neighborhood, cellphone, appointment_date, appointment_hour});

        if(result){
            return res.status(200).json({
                response: "Medical appointment updated successfully."
            });
        }else{
            return res.status(404).json({
                response: "The medical appointment could not be updated."
            });
        }
        
    },
    deleteappointment: async (req,res) =>{
        const id = req.query.id;
        
        const result = await Appointment.findByIdAndDelete(id);

        if(result){
            return res.status(200).json({
                response: "Successfully deleted medical appointment."
            });
        }else{
            return res.status(404).json({
                response: "The medical appointment could not be deleted."
            });
        }
    },
}

module.exports = controller;