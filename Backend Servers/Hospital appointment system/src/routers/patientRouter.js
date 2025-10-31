import express from "express";
import {
    getAllPatients,
    getPatientByID,
    addPatient,
    updatePatient, 
    deletePatient
} from "../controllers/patientController.js";

const patientRouter=express.Router();
patientRouter.get("/",getAllPatients);
patientRouter.get("/:id",getPatientByID);
patientRouter.post("/",addPatient);
patientRouter.put("/:id",updatePatient);
patientRouter.delete("/:id",deletePatient);

export default patientRouter;
