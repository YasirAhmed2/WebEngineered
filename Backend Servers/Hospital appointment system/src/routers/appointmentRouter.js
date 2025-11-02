import express from "express";
import {
    getAllAppointments,
    getAppointmentByID,
    addAppointment, 
    updateAppointment,
    deleteAppointment
} from "../controllers/appointmentController.js";
const appointmentRouter=express.Router();

appointmentRouter.get("/",getAllAppointments);
appointmentRouter.get("/:id",getAppointmentByID);
appointmentRouter.post("/",addAppointment);
appointmentRouter.put("/:id",updateAppointment);
appointmentRouter.delete("/:id",deleteAppointment);  
export default appointmentRouter;