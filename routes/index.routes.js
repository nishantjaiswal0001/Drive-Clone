import express from 'express'

const router=express.Router();

router.get('/home',(re1,res)=>{
    res.render('home')
})

export default router;