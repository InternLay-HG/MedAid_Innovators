import express from "express"
import { registerUser,loginUser,userProfile,bookAppointment,available_slots} from "../controllers/userController.js"
import roleMiddleware from "../middlewares/roleMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const userRouter=express.Router()

// Route for registering patient(user)
userRouter.post('/register',registerUser)

// Route for login patient(user)
userRouter.post('/login',loginUser)

// Route for fetching profile details of patient
userRouter.get("/my-profile",authMiddleware,roleMiddleware("Patient"),userProfile)

// Route for booking appointment
userRouter.post('/appointments/book/:doctorId',authMiddleware,roleMiddleware("Patient"),bookAppointment)

//Route for checking available slots of doctors
userRouter.get('/doctors/:doctorId/available-slots',authMiddleware,roleMiddleware("Patient"),available_slots)

export default userRouter