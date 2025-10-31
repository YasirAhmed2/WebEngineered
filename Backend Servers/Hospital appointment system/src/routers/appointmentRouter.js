import express from "express";
import {
    getAllAppointments,
    getAppointmentByID,
    addAppointment, 
    updateAppointment,
    deleteAppontment
} from "../controllers/appointmentController.js";
const appointmentRouter=express.Router();

appointmentRouter.get("/",getAllAppointments);
appointmentRouter.get("/:id",getAppointmentByID);
appointmentRouter.post("/",addAppointment);
appointmentRouter.put("/:id",updateAppointment);
appointmentRouter.delete("/:id",deleteAppontment);  
export default appointmentRouter;