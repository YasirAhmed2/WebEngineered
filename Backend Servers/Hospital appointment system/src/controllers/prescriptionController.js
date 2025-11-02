import { prescription } from "../data/data.js";
export const getAllPrescriptions=(req,res)=>{
    res.send(prescription);
}

export const getPrescriptionByID=(req,res)=>{
    let id=parseInt(req.params.id);
    let response=prescription.find((p)=>{
        return p.id===id;
    });
    if(response){
        res.send(response);
    }else{
        res.status(404).send("Prescription not found");
    }
}
export const addPrescription=(req,res)=>{
    let newPrescription=req.body;
    prescription.push(newPrescription);
    res.send(newPrescription);
}
export const updatePrescription=(req,res)=>{
    let id=parseInt(req.params.id);
    let updatedPrescription=req.body;
    prescription.map((p,index)=>{
        if(p.id===id){
            prescription[index]=updatedPrescription;
            res.send(updatedPrescription);
        }
    });
}
export const deletePrescription=(req,res)=>{
    let id=parseInt(req.params.id);
    prescription.map((p,index)=>{
        if(p.id===id){
            prescription.splice(index,1);
            res.send("Prescription deleted successfully");
        }
    });
}