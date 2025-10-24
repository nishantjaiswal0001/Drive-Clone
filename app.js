import express from "express"
import userRouter from "./routes/user.routes.js"

const app=express()

app.set("view engine",'ejs')

app.use('/user',userRouter)   //here we can use /uber in place of /user but we will find on localhost: 3000/uber/test  that means user is not related with the file name user.routes.js
// app.get("/",(req,res)=>{
//     // res.send("Drive Clone Project")
//     res.render('index')
// })

app.listen(3000,()=>console.log("server is running on port 3000"))