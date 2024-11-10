import {z} from "zod"

export const userSignupValidator = z.object({
    username: z.string(),
    email:z.string().email(),
    password: z.string()
})

export const userSignInValidator = z.object({
    email: z.string().email(),
    password: z.string()
})