import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import User from "../models/user.model.js";

export const updateUser = async (req, res, next) => {
    console.log(req.user, req.params.id)
    if (req.user.token != req.params.id) return next(errorHandler(404, "User can only update his own account"))
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        }, {
            new: true
        })
        const { password:_, ...updatedData } = updateUser.toObject()
        res.status(200).json(updatedData)
    } catch (error) {
        next(errorHandler())
    }
}
