import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"

dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB Connected")
}).catch((e) => {
    console.log("DB Error" + e)
})

const app = express();

app.use("/api/user", userRouter)

app.listen(3006, ()=>{
    console.log("yes I am awake")
})