import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { userSignInValidator, userSignupValidator } from "../input.validator.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const signup = async (req, res, next) => {
    try {
        const inputValidion = userSignupValidator.safeParse(req.body);
        const { username, email, password } = req.body;
        if (!inputValidion.success) {
            return next(errorHandler(400, "Inputs are incorrect"))
        }
        const hashPassword = bcryptjs.hashSync(password, 10)
        const newUser = await User.create({ username, email, password: hashPassword });
        const { password:_, ...updatedData } = newUser.toObject()
        res.status(201).json(updatedData)
    } catch (error) {
        next(errorHandler(error.status, error.message))
    }
}


export const signin = async (req, res, next) => {
    try {
        const inputValidion = userSignInValidator.safeParse(req.body)
        if (!inputValidion.success) {
            return next(errorHandler(400, "Inputs are incorrect"))
        }
        const { email, password } = req.body;
        const findUser = await User.findOne({ email })
        if (!findUser) {
            return next(errorHandler(404, "User doesn't exist"))
        }
        const validPassword = bcryptjs.compareSync(password, findUser.password)
        if (!validPassword) {
            return next(errorHandler(404, "Invalid Credentials"))
        }
        const token = jwt.sign({ token: findUser._id }, process.env.JWT_SECRET)
        const { password:_, ...updatedData } = findUser.toObject()
        res.cookie("access_token", token, {
            httpOnly: true,
            path: "/"
        })
        .status(200)
        .json({ msg: "User logged in successfuly", updatedData })

    } catch (error) {
        next(errorHandler(error.status, error.message))
    }
}

export const google = async (req, res, next)=>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(user){
            const token = jwt.sign({token: user._id}, process.env.JWT_SECRET)
            const{ password:_, ...updatedData} = user.toObject()
            res.cookie("access_token", token,{
                http: true,
                path: "/"
            }).status(200).json(updatedData)
        }
        else{
            const generatePassword = Math.random().toString(36).slice(-8)
            const hashedPassword = bcryptjs.hashSync(generatePassword, 10)
            const newUser = await User.create({
                username: req.body.name.split(" ").join("").toLowerCase()+Math.random().toString(36).slice(-8),
                email: req.body.email,
                password: hashedPassword,
                avatar: req.body.photoURL
            })
            const token = jwt.sign({token: newUser._id}, process.env.JWT_SECRET)
            const {password:_, updatedData} = newUser.toObject()
            res.cookie("access_token", token, {
                httpOnly: true,
                path: "/"
            })
            .status(200)
            .json(updatedData)
        }
    } catch (error) {
        next(errorHandler(error.status, error.message))
    }
}