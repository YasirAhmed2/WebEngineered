import { doctor } from "../data/data.js";
export const getAllDoctors=(req,res)=>{
    res.send(doctor);
}

export const getDoctorByID=(req,res)=>{
    let id= parsInt(req.params.id);
    let response=doctor.find((d)=>{
        return d.id===id;
    });
    if(response){
        res.send(response);

    }else{
        res.status(404).send("Doctor not found");
    }
}

export const addDoctor=(req,res)=>{
    let newDoctor=req.body;
    doctor.doctor(newDoctor);
    res.send(newDoctor);
}

export const updateDoctor=(req,res)=>{
    let id=parseInt(req.params.id);
    let updatedDoctor=req.body;
    doctor.map((d,index)=>{
        if(d.id===id){
            doctor[index]=updatedDoctor;
            res.send(updatedDoctor);
        }
    });
}

export const deleteDoctor=(req,res)=>{
    let id=parseInt(req.params.id);
    doctor.map((d,index)=>{
        if(d.id===id){
            doctor.splice(index,1);
            res.send("Doctor deleted successfully");
        }
    })
}