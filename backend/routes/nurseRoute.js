import express from "express";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { loginDoctorOrNurse } from "../controllers/doctorController.js";

const nurseRouter = express.Router();

// Route for doctors login
nurseRouter.post("/login",loginDoctorOrNurse );

// Route accessible only to Doctors
nurseRouter.get("/nurse-data", authMiddleware, roleMiddleware("Nurse"), (req, res) => {
    res.json({ message: "This data is only accessible to Nurses" });
  });

  export default nurseRouter