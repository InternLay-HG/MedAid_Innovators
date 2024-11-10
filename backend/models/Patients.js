import mongoose from "mongoose";

const patientSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true , unique:true},
    password:{type:String, required:true},
    image:{type:String, default:"https://cdn.pixabay.com/photo/2024/05/19/09/37/ai-generated-8772169_1280.png"},
    dob:{type:String,default:"Not filled"},
    gender:{type:String,default:"Not filled"},
    contact_info:{type:String,default:"0000000000"},
    address:{type:String},
    weight:{type:String,default:"Not filled"},
    health_problem:{type:String,default:"Not filled"},
    prescribed_medicine:{type:String,default:"Not filled"},
    health_update:{type:String,default:"Not filled"},
    appointments: [{
        doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'doctors_nurses' },
        date: { type: Date },
        time: { type: String },
        status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' }
    }]
})

const patientsModel= mongoose.models.patients || mongoose.model('patients',patientSchema)

export default patientsModel