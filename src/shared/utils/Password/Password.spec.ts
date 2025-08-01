import { beforeEach, describe, expect, it } from "vitest"
import type IPasswordUtils from "./IPasswordUtils"
import { PasswordUtils } from "./index"

describe("PasswordUtils", () => {
	let passwordUtils: IPasswordUtils
	const rawPassword = "12345678"

	beforeEach(() => {
		passwordUtils = new PasswordUtils()
	})

	it("Deve criptografar a senha", async () => {
		const hashedPassword = await passwordUtils.crypto(rawPassword)
		expect(hashedPassword).toBeDefined()
		expect(hashedPassword).not.toBe(rawPassword)
	})

	it("Deve retornar TRUE caso a senha esteja correta", async () => {
		const hashedPassword = await passwordUtils.crypto(rawPassword)
		const passwordMatch = await passwordUtils.compare(
			rawPassword,
			hashedPassword
		)
		expect(passwordMatch).toBe(true)
	})

	it("Deve retornar FALSE caso a senha esteja incorreta", async () => {
		const hashedPassword = await passwordUtils.crypto(rawPassword)
		const passwordMatch = await passwordUtils.compare(
			"87654321",
			hashedPassword
		)
		expect(passwordMatch).toBe(false)
	})
})
