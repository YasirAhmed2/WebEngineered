export const patient=[
{
     id:1,
    name: "abc",
    age:24
},{
id:2,
name:"xyz",
age:30
}];
   
export const doctor=[
{
    id:1,
    name:"Dr. Smith",
    specialization:"Cardiology"
},{ 

    id:2,
    name:"Dr. Jones",
    specialization:"Neurology"
}];

export const appointment=[
{
    id:1,
    patientId:1,
    doctorId:2,
    date:"2023-10-01",
    time:"10:00 AM"
},{
    id:2,
    patientId:2,
    doctorId:1,
    date:"2023-10-02",
    time:"11:00 AM"
}];
export const prescription=[
{
    id:1,
    appointmentId:1,
    medication:"Medicine A",
    dosage:"2 times a day"
},{
    id:2,
    appointmentId:2,
    medication:"Medicine B",
    dosage:"Once a day"
}];