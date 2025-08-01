import type { User } from "@prisma/client"
import { prisma } from "@/shared/database/prisma/client"
import type { CreateUserRequest } from "../dtos/createUserRequest"
import type IUserRepository from "../interfaces/IUserRepository"

export default class UserRepository implements IUserRepository {
	create(user: CreateUserRequest): Promise<User> {
		return prisma.user.create({
			data: user
		})
	}
	findById(id: string): Promise<User | null> {
		return prisma.user.findFirst({
			where: {
				id
			}
		})
	}
	findByEmail(email: string): Promise<User | null> {
		return prisma.user.findUnique({
			where: {
				email
			}
		})
	}
}
