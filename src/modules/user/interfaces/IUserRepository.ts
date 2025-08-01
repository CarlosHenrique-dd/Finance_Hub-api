import type { User } from "@prisma/client"
import type { CreateUserRequest } from "../dtos/createUserRequest"

interface IUserRepository {
	create(user: CreateUserRequest): Promise<User>
	findById(id: string): Promise<User | null>
	findByEmail(email: string): Promise<User | null>
}

export default IUserRepository
