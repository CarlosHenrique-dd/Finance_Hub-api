import bcrypt from "bcrypt"
import type IPasswordUtils from "./IPasswordUtils"

export class PasswordUtils implements IPasswordUtils {
	private SALT_ROUNDS = 10

	async crypto(password: string) {
		return bcrypt.hash(password, this.SALT_ROUNDS)
	}

	async compare(password: string, hashPassword: string) {
		return bcrypt.compare(password, hashPassword)
	}
}
