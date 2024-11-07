
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { userSignupValidator } from "../input.validator.js";
import { errorHandler } from "../utils/error.js";


export const signup = async (req, res, next) => {
   
    try {
        const { username, email, password } = req.body;
        const inputValidion = userSignupValidator.safeParse(req.body);
        if (!inputValidion.success) {
            return res.status(400).json({message:"inputs are incorrect"},errors)
        }
        const hashPassword = bcryptjs.hashSync(password, 10)
        const newUser = await User.create({ username, email, password: hashPassword });
        const { password:_, ...updatedData} = newUser.toObject()
        res.status(201).json(updatedData)
    } catch (error) {
        console.log(error)
        next(errorHandler(error.status, error.message))
    }

}