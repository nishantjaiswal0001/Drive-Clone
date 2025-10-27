import express from "express"
import userRouter from "./routes/user.routes.js"
import dotenv from "dotenv"
dotenv.config()
import dbconnection from "./config/db.js"
import usermodel from "./models/user.model.js"
import cookieParser from "cookie-parser"
import indexrouter from "./routes/index.routes.js"

const app=express()

app.set("view engine",'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())



app.use('/user',userRouter)   //here we can use /uber in place of /user but we will find on localhost: 3000/uber/test  that means user is not related with the file name user.routes.js
// app.get("/",(req,res)=>{
//     // res.send("Drive Clone Project")
//     res.render('index')
// })

app.use('/',indexrouter)

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))