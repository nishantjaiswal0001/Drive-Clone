import mongoose from "mongoose";

const dbconnection=mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected")
}).catch(()=>{
    console.log("Failed to connect database")
    process.exit(1)
})

export default dbconnection