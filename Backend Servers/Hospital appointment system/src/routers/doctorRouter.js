import express from "express";
import{
    getAlldoctors,
    getDoctorByID,
    addDoctor,
    updateDoctor,
    deleteDoctor
} from "../controllers/doctorController.js";

const doctorRouter=express.Router();
doctorRouter.get("/",getAlldoctors);
doctorRouter.get("/:id",getDoctorByID);
doctorRouter.post("/",addDoctor);
doctorRouter.put("/:id",updateDoctor);
doctorRouter.delete("/:id",deleteDoctor);

export default doctorRouter;