import { PasswordUtils } from "@/shared/utils/Password"
import CreateUserController from "../controllers/CreateUserController"
import UserRepository from "../repositories/UserRepository"
import CreateUserService from "../services/CreateUserService"

export default function makeCreateUser() {
	const userRepository = new UserRepository()
	const passwordUtils = new PasswordUtils()
	const createUserService = new CreateUserService(userRepository, passwordUtils)
	return new CreateUserController(createUserService)
}
