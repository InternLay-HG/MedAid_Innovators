import jwt from "jsonwebtoken";
import doctorsModel from "../models/Doctors_Nurses.js";
import patientsModel from "../models/Patients.js";
// import dotenv from "dotenv";

const adminEmails = process.env.ADMIN_EMAIL

const authMiddleware = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ message: "Access denied: No token provided" });
  
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Replace with your actual JWT secret
    const userId = verified.id;
    const userEmail = verified.email;

    // Check if the user is an admin directly from the adminIds list
    if (adminEmails.includes(userEmail)) {
      req.user = { id: userId, type: "Admin" };
      return next();
    }

    // Check if the user is in the doctors/nurses collection
    const doctor = await doctorsModel.findById(userId);
    if (doctor) {
      req.user = { id: doctor._id, type: doctor.role }; // doctor.role could be "Doctor" or "Nurse"
      return next();
    }

    // Check if the user is in the patients collection
    const patient = await patientsModel.findById(userId);
    if (patient) {
      req.user = { id: patient._id, type: "Patient" };
      console.log(req.user.id)
      return next();
    }

    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
