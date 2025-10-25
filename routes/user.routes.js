import express from "express"
import { body,validationResult } from "express-validator"
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
    (req,res)=>{
        const errors=validationResult(req);
        // console.log(errors);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            })
        }

        res.send(errors)
    // console.log(req.body)
    // res.send("Data received")
})

export default router

