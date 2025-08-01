import { z } from "zod"

export const createUserSchema = z.object({
	name: z.string().min(3),
	email: z.email(),
	password: z.string().min(8)
})

export type CreateUserRequest = z.infer<typeof createUserSchema>
