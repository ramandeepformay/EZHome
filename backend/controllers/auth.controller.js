
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
        const { password: _, ...updatedData } = newUser.toObject()
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
            return next(errorHandler(404, "User does't exist"))
        }
        const validPassword = bcryptjs.compareSync(password, findUser.password)
        if (!validPassword) {
            return next(errorHandler(404, "Invalid Credentials"))
        }
        const token = jwt.sign({ token: findUser._id }, process.env.JWT_SECRET)
        const { password: _, ...updatedData } = findUser.toObject()
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({ msg: "user created successfuly", updatedData })

    } catch (error) {
        next(error)
    }


}