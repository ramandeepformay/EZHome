import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const verifyUser = (req, res, next) => {
 try {
        const token = req.cookies.access_token;
        if (!token) {
            return next(errorHandler(404, "Unauthorized"))
        } else {
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) return next(errorHandler(403, "Forbidden"))
                req.user = user
                next()
            })
        }
    } catch (error) {
        next(errorHandler())
    }
}