import { appointment } from "../data/data";
export const getAllAppointments=(req,res)=>{
    res.send(appointment);
}
export const getAppointmentByID=(req,res)=>{
    let id=parseInt(req.params.id);
    let response=appointment.find((a)=>{
        return a.id===id;
    });
    if(response){
        res.send(response);
    }else{
        res.status(404).send("Appointment not found");
    }   
}
export const addAppointment=(req,res)=>{
    let newAppointment=req.body;
    appointment.push(newAppointment);
    res.send(newAppointment);
}
export const updateAppointment=(req,res)=>{
    let id=parseInt(req.params.id);
    let updatedAppointment=req.body;
    appointment.map((a,index)=>{
        if(a.id===id){
            appointment[index]=updatedAppointment;
            res.send(updatedAppointment);
        }
    });
}
export const deleteAppointment=(req,res)=>{
    let id=parseInt(req.params.id);
    appointment.map((a,index)=>{
        if(a.id===id){
            appointment.splice(index,1);
            res.send("Appointment deleted successfully");
        }
    });
}
