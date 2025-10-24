import express from "express"

const router=express.Router();

// router.get('/test',(req,res)=>{
//     res.send("This is testing")
// })

router.get('/register',(req,res)=>{
    // res.send(" This is Register Page")
    res.render('register')
})

export default router

