import {patient} from "../data/data.js";
export const getAllPatients=(req,res)=>{
    res.send(patient);
}

export const getPatientByID=(req,res)=>{
 
let id=parseInt(req.params.id);
let response=patient.find((p)=>{
    return p.id===id;
});

  
    if(response){
        res.send(response);
    }
    else{
        res.status(404).send("Patient not found");
    }
}