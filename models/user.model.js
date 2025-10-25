import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    // username: String,
    // email: String,
    // password: String
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [8, "Username must be atleast 8 character length"]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13, "email must be atleast 8 character length"]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [8, "password must be atleast 8 character length"]
    }
})

const usermodel=mongoose.model('user',userschema)

export default usermodel