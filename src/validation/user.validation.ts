import {  z } from "zod"

const usernameSchema = z
  .string()
  .trim()
  .min(3, "Username must be at least 3 characters long")
  .max(20, "Username must not exceed 20 characters")
  .regex(
    /^[a-zA-Z][a-zA-Z0-9._]*$/,
    "Username must start with a letter and can only contain letters, numbers, underscores, and dots"
  )
  .regex(/^(?!.*[_.]{2})/, "Username cannot contain consecutive underscores or dots")
  .regex(/^(?!.*[_.]$)/, "Username cannot end with an underscore or dot")

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(32, "Password must not exceed 32 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")


export const formSchema = z.object({
    username:usernameSchema,
    fullName : z.string().min(3,{
        message:"Name must contain atlease 3 character"
    }).max(100,{
        message:"Name containe less than 100 characters"
    }),
    email:z.email({message:"Invalid email address"}),
    password:passwordSchema,
    confirmPassword:passwordSchema

}).refine((data)=> data.password === data.confirmPassword,{
    message:"Password and confirm password do not matches",
})