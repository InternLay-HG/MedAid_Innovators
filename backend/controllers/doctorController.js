import jwt from "jsonwebtoken"
// import {v2 as cloudinary} from "cloudinary"
import mongoose from "mongoose"
import patientsModel from "../models/Patients.js";
import doctorsModel from "../models/Doctors_Nurses.js";
import bcrypt from "bcrypt"
import path from "path"


//api for doctor login
const loginDoctorOrNurse=async(req,res)=>{
    try {
        const { email, password } = req.body;
    
        // Find the doctor by email
        const doctor = await doctorsModel.findOne({ email });
        if (!doctor) {
          return res.status(404).json({ success: false, message: "Doctor not found" });
        }
    
        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
          return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
    
        // Generate JWT token
        const token = jwt.sign(
          { id: doctor._id, email: doctor.email }, // Payload
          process.env.JWT_SECRET, // Secret key
        );
    
        // Return token and doctor details (excluding sensitive data)
        res.json({
          success: true,
          token,
          doctor: {
            id: doctor._id,
            name: doctor.name,
            email: doctor.email,
            role: doctor.role,
            image: doctor.image,
            degree: doctor.degree,
            about: doctor.about,
            contact_info: doctor.contact_info,
            address: doctor.address,
            // available: doctor.available,
            // slots_booked: doctor.slots_booked,
            fees: doctor.fees,
          },
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
      }
}

const respondAppointment = async (req, res) => {
  try {
    const { doctorId, appointmentId } = req.params;
    const { status } = req.body;

    // Update appointment status in doctor's record
    const doctor = await doctorsModel.findById(doctorId);
    const appointment = doctor?.appointments.id(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found in doctor's record." });
    }

    appointment.status = status;
    await doctor.save();

    // Update appointment status in patient's record
    const patient = await patientsModel.findById(appointment.patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found." });
    }

    const patientAppointment = patient.appointments.find(app => app._id.equals(appointmentId));
    if (!patientAppointment) {
      return res.status(404).json({ message: "Appointment not found in patient's record." });
    }

    patientAppointment.status = status;
    await patient.save();

    res.status(200).json({ message: `Appointment ${status.toLowerCase()} successfully.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getDoctorsBySpecialty = async (req, res) => {
  try {
      // Fetch all doctors with role "Doctor"
      const doctors = await doctorsModel.find({ role: "Doctor" });

      // Organize doctors by specialty
      const doctorsBySpeciality = doctors.reduce((acc, doctor) => {
          const speciality = doctor.speciality || 'General';
          if (!acc[speciality]) {
              acc[speciality] = [];
          }
          acc[speciality].push(doctor);
          return acc;
      }, {});

      return res.json({ success: true, data: doctorsBySpeciality });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: error.message });
  }
};


export {loginDoctorOrNurse,respondAppointment,getDoctorsBySpecialty}