import express from "express";
import patientRouter from "./routers/patientRouter.js";
import doctorRouter from "./routers/doctorRouter.js";
import appointmentRouter from "./routers/appointmentRouter.js";
import prescriptionRouter from "./routers/prescriptionRouter.js";

const app = express();
app.use(express.json());
app.use("/patient", patientRouter);
// app.use("/doctor", doctorRouter);
// app.use("/appointment", appointmentRouter);
// app.use("/prescription",prescriptionRouter);
app.get("/", (req,res)=>{
    res.send("Welcome to Hospital Appointment System API");
});

app.listen(3000, ()=>{
    console.log("Server is running at port: ", 3000);
});
