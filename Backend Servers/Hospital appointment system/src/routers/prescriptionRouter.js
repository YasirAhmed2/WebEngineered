import express from "express";
import {
    getAllAppointments,
    getAppointmentByID,
    addAppointment,
    updateAppointment,
    deleteAppointment
} from "../controllers/appointmentController.js";
const prescriptionRouter=express.Router();
prescriptionRouter.get("/",getAllAppointments);
prescriptionRouter.get("/:id",getAppointmentByID);
prescriptionRouter.post("/",addAppointment);
prescriptionRouter.put("/:id",updateAppointment);
prescriptionRouter.delete("/:id",deleteAppointment);  
export default prescriptionRouter;