import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {v2 as cloudinary} from "cloudinary"
import mongoose from "mongoose"
import patientsModel from "../models/Patients.js";
import doctorsModel from "../models/Doctors_Nurses.js";

// api function to register(sign-up) patient/user
const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name || !password || !email){
            return res.json({success:false,message:"Missing details"})
        }
        
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter valid email"})
        }

        if(password.length<6){
            return res.json({success:false,message:"Enter strong password (password should be of length > 6)"})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const userData={
            name,
            email,
            password:hashedPassword
        }
        const newUser=new patientsModel(userData)
        const user=await newUser.save()

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        return res.json({success:true,token})
    }
    catch(error){
        console.log(error);
        return res.json({successs:false,message:error.message})
    }
}

 
//api function for patient(user) login:
const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await patientsModel.findOne({email})

        if(!user) return res.json({success:false,message:"User does not exist"})
        const isMatch=await bcrypt.compare(password,user.password)
        if(isMatch){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
            return res.json({success:true,token})
        }else{
            return res.json({success:false,message:"Invalid credentials"})
        }
    }

    catch(error){
        console.log(error);
        res.json({successs:false,message:error.message})
    }
}


const userProfile = async (req, res) => {
    try {
      const userId = req.user.id;
      console.log(userId);
      const user = await patientsModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      
      return res.status(200).json({ success: true, data: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };



const bookAppointment = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const { patientId, date, time } = req.body;

    // Generate a consistent appointment ID
    const appointmentId = new mongoose.Types.ObjectId();

    // Convert patientId to ObjectId
    const patientObjectId = new mongoose.Types.ObjectId(patientId);
    console.log("Patient ID:", patientId);

    // Validate date and time
    console.log("Date received:", date);
    console.log("Time received:", time);
    const appointmentDate = new Date(`${date} ${time}`);
    if (isNaN(appointmentDate.getTime())) {
      return res.status(400).json({ error: "Invalid date or time format" });
    }

    // Find doctor and add appointment
    const doctor = await doctorsModel.findById(doctorId);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    doctor.appointments.push({
      _id: appointmentId,  // Use the generated appointmentId
      patientId: patientObjectId,
      date: appointmentDate,
      time,
      status: 'Pending'
    });
    await doctor.save();

    // Find patient and add the same appointment
    const patient = await patientsModel.findById(patientId);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    patient.appointments.push({
      _id: appointmentId,  // Use the same appointmentId
      doctorId: doctor._id,
      date: appointmentDate,
      time,
      status: 'Pending'
    });
    await patient.save();

    res.status(200).json({ message: "Appointment request sent.", appointmentId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const available_slots=async(req,res)=>{
    try {
        const { doctorId } = req.params;
        const doctor = await doctorsModel.findById(doctorId).select('available_slots');
        res.status(200).json(doctor.available_slots);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export {registerUser,loginUser,userProfile,bookAppointment,available_slots}