import express from "express"
import { body,validationResult } from "express-validator"
import usermodel from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const router=express.Router();

// router.get('/test',(req,res)=>{
//     res.send("This is testing")
// })

router.get('/register',
    (req,res)=>{
    // res.send(" This is Register Page")
    res.render('register')
})

router.post('/register',
    body('email').trim().isEmail().isLength({min: 10}),
    body('password').trim().isLength({min: 5}),
    body('username').trim().isLength({min: 3}),
    async (req,res)=>{
        const errors=validationResult(req);
        // console.log(errors);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            })
        }

        // res.send(errors)
    // console.log(req.body)
    // res.send("Data received")
    const {username,email,password}=req.body
    const hashpassword=await bcrypt.hash(password,10)  //here 100 is number of times password is hash the more the more secure
    const newuser=await usermodel.create({
        username,
        email,
        password: hashpassword
    })
    res.json(newuser)
    // console.log(newuser)
})

router.get("/login",(req,res)=>{
    res.render('login')
})

router.post('/login',
    body('password').trim().isLength({min: 5}),
    body('username').trim().isLength({min: 3}),
    async (req,res)=>{
       const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            })
        }
        const {username,password}=req.body

        const user=await usermodel.findOne({
            username: username
        })

        if(!user){
            return res.status(400).json({
                message: "username or password is incorrect"
            })
        }

        const ismatch=await bcrypt.compare(password,user.password)
        if(!ismatch){
            return res.status(400).json({
                message: "username or password is incorrect"
            })
        }
        // res.json({
        //     message: "Logged in"
        // })

        const token=jwt.sign({
            userid: user._id,
            email: user.email,
            username: user.username
        },
        process.env.JWT_SECRET,
    )
    res.cookie('token',token)

    res.send('Logged in')
})

export default router

