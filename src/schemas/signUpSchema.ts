import z from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 character")
  .max(20, "Username must no more than 20 character")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain specialc character");

export const signUpSchemaValidation = z.object({
  username: usernameValidation,
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be longer than 6 character" }),
});
