import express from "express"
import userRouter from "./routes/user.routes.js"
import dotenv from "dotenv"
dotenv.config()
const app=express()

app.set("view engine",'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter)   //here we can use /uber in place of /user but we will find on localhost: 3000/uber/test  that means user is not related with the file name user.routes.js
// app.get("/",(req,res)=>{
//     // res.send("Drive Clone Project")
//     res.render('index')
// })

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))