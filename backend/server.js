import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import { connect } from "mongoose"
import adminRouter from "./routes/adminRoute.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"

const app=express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()


//middlewares
app.use(cors());
app.use(cors({
    origin: ['http://localhost:5173', 'https://medaid-frontend.onrender.com'], // Allow only this origin to access the server
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS', // Allowed HTTP methods
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, auth-token', // Allowed headers
    credentials: true // If you need to send cookies or HTTP authentication
}));
app.use(express.json())
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

//api endpoints
//Harsh9234
//     mongodb+srv://kashyap7harsh:<db_password>@cluster2.d6n8c.mongodb.net/

app.use('/api/admin',adminRouter)  //api to admin login
app.use('/api/user',userRouter)    //api to patient sign-up
app.use('/api/doctor',doctorRouter)

app.get('/',(req,res)=>{
    res.send("Api working")
})

app.listen(port,()=>console.log("Server started",port))
