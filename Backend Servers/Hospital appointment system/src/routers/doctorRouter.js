import express from "express";
import{
    getAllDoctors,
    getDoctorByID,
    addDoctor,
    updateDoctor,
    deleteDoctor
} from "../controllers/doctorController.js";

const doctorRouter=express.Router();
doctorRouter.get("/",getAllDoctors);
doctorRouter.get("/:id",getDoctorByID);
doctorRouter.post("/",addDoctor);
doctorRouter.put("/:id",updateDoctor);
doctorRouter.delete("/:id",deleteDoctor);

export default doctorRouter;