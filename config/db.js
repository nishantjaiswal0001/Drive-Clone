import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const dbconnection=mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected")
}).catch(()=>{
    console.log("Failed to connect database")
    process.exit(1)
})

export default dbconnection