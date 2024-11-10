import jwt from "jsonwebtoken"
import validator from "validator"
import {v2 as cloudinary} from "cloudinary"
import doctorsModel from "../models/Doctors_Nurses.js";
import bcrypt from "bcrypt"
import path from "path"

// api for adding doctors
const addDoctor=async (req,res)=>{
    try{
        const {name,email,password,degree,about,contact_info,address,available_slots,fees,role,speciality,license_number}=req.body;
        
        const imageFile=req.file;
        
        console.log(name,email,password,degree,about,contact_info,address,available,slots_booked,fees,role,speciality,license_number,imageFile)

        if(!name || !email  || !password || !degree || !about || !contact_info || !address || !role || !license_number){
            return res.json({success:false,message:"Missing details"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter valid email"})
        }

        if (role === "Doctor" && !speciality) {
            return res.json({ success: false, message: "Specialty is required for doctors" });
        }

        if(password.length<6){
            return res.json({success:false,message:"Enter strong password (password should be of length > 6)"})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl=imageUpload.secure_url

        // Structure available_slots from request (expected as an array of objects)
        const parsedAvailableSlots = available_slots ? JSON.parse(available_slots) : [];

        const doctorData={
            name,
            email,
            password:hashedPassword,
            image:imageUrl,
            degree,
            about,
            contact_info,
            address,
            available_slots: parsedAvailableSlots,
            appointments: [],
            fees,
            role,
            license_number
        }

        // Conditionally add specialty if role is "Doctor"
        if (role === "Doctor") {
            doctorData.specialty = speciality;
        }

        const newDoctor=new doctorsModel(doctorData)
        await newDoctor.save()

        return res.json({success:true,message:"Doctor added"})
    }
    catch(error){
        console.log(error);
        return res.json({successs:false,message:error.message})
    }
}


//api for admin login
const loginAdmin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign({email},process.env.JWT_SECRET);
            return res.json({success:true,token})
        }
    }
    catch(error){
        console.log(error);
        return res.json({successs:false,message:error.message})
    }
}

export {addDoctor,loginAdmin}