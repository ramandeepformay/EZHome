import {z} from "zod"

export const userSignupValidator = z.object({
    username: z.string(),
    email:z.string().email(),
    password: z.string()
})

