import ConflictError from "@/shared/errors/ConflictError"
import type IPasswordUtils from "@/shared/utils/Password/IPasswordUtils"
import type { CreateUserRequest } from "../dtos/createUserRequest"
import type IUserRepository from "../interfaces/IUserRepository"

export default class CreateUserService {
	constructor(
		private readonly userRepository: IUserRepository,
		private readonly passwordUtils: IPasswordUtils
	) {}

	async execute(user: CreateUserRequest) {
		const { email, password } = user

		const emailAlreadyExists = await this.userRepository.findByEmail(email)

		if (emailAlreadyExists) throw new ConflictError("Email already exists")

		user.password = await this.passwordUtils.crypto(password)

		return await this.userRepository.create(user)
	}
}
