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

export const addPatient=(req,res)=>{
    let newPatient=req.body;
    patient.push(newPatient);
    res.send(newPatient);
}

export const updatePatient=(req,res)=>{
    let id =parseInt(req.params.id);
    let updatedPatient=req.body;
    patient.map((p,index)=>{
        if(p.id===id){
            patient[index]=updatedPatient;
            res.send(updatedPatient);
        }
    });
};
 export const deletePatient=(req,res)=>{
    let id=parseInt(req.params.id);
    patient.map((p,index)=>{
        if(p.id===id){
            patient.splice(index,1);
            res.send("Patient deleted successfully");

        };
    });
 };
