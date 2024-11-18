import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB Connected")
}).catch((e) => {
    console.log("DB Error" + e)
})

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}))

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next)=>{
    const statusCode= err.statusCode || 500
    const message = err.message || "Internal server error"
    res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

app.listen(3006, ()=>{
    console.log("yes I am awake")
})