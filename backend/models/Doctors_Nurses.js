import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true , unique:true},
    password:{type:String, required:true},
    image:{type:String, default:"https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1729872883~exp=1729876483~hmac=b188d8b24d8a524cf75851686c1801304a167c1e360e68ffa18b409eaf386f9d&w=740"},
    degree:{type:String,required:true},
    about:{type:String,required:true},
    contact_info:{type:String,required:true},
    address:{type:String,required:true},
    available_slots: [{ day: String, time: String }], // New field
    appointments: [{
        patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'patients' },
        date: { type: Date },
        time: { type: String },
        status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' }
    }],
    fees:{type:Number},
    role:{type:String,required:true},
    speciality: { type: String, required: function() { return this.role === 'Doctor'; } }, // Add specialty field with conditional requirement
    license_number:{type:String,required:true}
})

const doctorsModel= mongoose.models.doctors_nurses || mongoose.model('doctors_nurses',doctorSchema)

export default doctorsModel