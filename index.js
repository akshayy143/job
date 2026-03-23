
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});

const app = express();




// app.get("/home",(req,res)=>{
//     return res.status(200).json({
//         message:"Hello World",
//         success:true
//     })
//middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true // Allow cookies to be sent 
}

app.use(cors(corsOptions))
let port = process.env.port||3000;

//api

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);



app.listen(port,()=>{
    connectDB()
    console.log(`listening port ${port}`)
})
